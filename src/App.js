import React, { useState, useEffect } from "react";
import axios from 'axios';
import { DNA } from 'react-loader-spinner'
import { getFilteredCards } from "./helpers";
import { createGlobalStyle } from "styled-components";
import { REACT_APP_API_URL } from './constants';

import Card from "./components/Card";
import Modal from "./components/Modal";
import Button from "./components/Button";

import * as Styled from "./styled";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const App = () => {
  const [loading, setLoading] = useState(true); 
  const [cardsData, setCardsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredCardsData, setFilteredCardsData] = useState([]);

  const applyFilters = (values) => {
    const filteredCards = getFilteredCards(values, cardsData);

    setIsModalOpen(false);
    setFilteredCardsData(filteredCards);
  };

  const getCardsData = async () => {
    try {
      const { data } = await axios(REACT_APP_API_URL);

      setCardsData(data?.data?.items);
      setFilteredCardsData(data?.data?.items);
      setLoading(false);
    } catch (error) {
      console.log('Fetch error:', error)
      setLoading(false);
    }
  }

  useEffect(() => {
    getCardsData()
  }, []);

  return (
    <Styled.Container>
      <Styled.Header>
        <Button label="Filters" onClick={() => setIsModalOpen(true)} />
      </Styled.Header>

      <Styled.Cards>
        {filteredCardsData?.map((card) => (<Card key={card.id} {...{ card }} />))}
      </Styled.Cards>

      <Modal {...{ isModalOpen, setIsModalOpen, applyFilters }} />
      <GlobalStyle />
      <DNA
        width="80"
        height="80"
        visible={loading}
        ariaLabel="dna-loading"
      />
    </Styled.Container>
  );
};

export default App;
