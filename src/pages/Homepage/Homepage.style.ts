import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 0;
  @media (max-width: 600px) {
    padding: 2rem 0;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 100px;
`;

export const SubHeading = styled.h2`
  margin: 1rem 0;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.8em;
`;

export const List = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;
