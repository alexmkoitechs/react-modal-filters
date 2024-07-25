import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  animation: ${(props) => (props.$isVisible ? fadeIn : fadeOut)} 0.3s;
`;

export const Content = styled.div`
  overflow: auto;
  padding: 0 20px;
  background: white;
  display: ${(props) => (props.$isVisible ? "block" : "none")};
  animation: ${(props) => (props.$isVisible ? fadeIn : fadeOut)} 0.3s;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentTitle = styled.div`
  margin: 0;
  font-size: 15px;
  font-weight: bold;
`;

export const ContentClose = styled.div`
  cursor: pointer;
  position: relative;

  &::before {
    zoom: 2;
    color: black;
    content: 'x';
    font-weight: 300;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
