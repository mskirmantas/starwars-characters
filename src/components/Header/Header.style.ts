import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  z-index: 2;
`;

export const Container = styled.div`
  height: 100%;
  padding: 0 3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;
