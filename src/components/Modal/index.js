import FilterForm from "../Form";

import * as Styled from "./styled";

const Modal = ({ isModalOpen, setIsModalOpen, applyFilters }) => (
  <Styled.Overlay
    $isVisible={isModalOpen}
    onClick={() => setIsModalOpen(false)}
  >
    <Styled.Content
      $isVisible={isModalOpen}
      onClick={(e) => e.stopPropagation()}
    >
      <Styled.ContentHeader>
        <Styled.ContentTitle>Filters</Styled.ContentTitle>
        <Styled.ContentClose onClick={() => setIsModalOpen(false)} />
      </Styled.ContentHeader>

      <FilterForm {...{ applyFilters }} />
    </Styled.Content>

  </Styled.Overlay>
);

export default Modal;
