import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 330px;
  position: relative;
  margin: 0 10px 10px 0;
  border: 1px solid #e6e6e6;
`;

export const CardLink = styled.a`
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  text-decoratoin: none;
`;

export const CardPreview = styled.div`
  flex: 1;
  z-index: 2;
  height: 150px;
  position: relative;

  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;
  }
`;

export const CardText = styled.div`
  display: flex;
  padding: 10px;
  font-size: 15px;
  flex-direction: column;

  & > div {
    margin-top: 5px;
  }
`;

export const CardPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: inline-block;

  :nth-child(2) {
    margin-left: 5px;
  }
`;

export const CardParams = styled.div`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardListStatuses = styled.div`
  display: flex;
`;

export const CardStatus = styled.div`
  width: 25px;
  height: 25px;
  color: white;
  display: flex;
  font-size: 14px;
  margin-right: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;

export const CardBussiness = styled.div`
  height: 20px;
  font-size: 14px;
`;
