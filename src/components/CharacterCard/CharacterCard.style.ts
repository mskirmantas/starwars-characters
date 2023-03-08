import styled from "styled-components";
import { theme } from "../../styles";

export const Card = styled.div`
  cursor: pointer;
  width: 180px;
  margin: 1rem;
  background: rgba(0, 0, 0, 0.75);
  border: 2px solid ${theme.color.yellow};
  border-radius: 1rem;
  padding: 1rem;
  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: 0 0 35px rgba(209, 182, 10, 0.85);
  }
`;

export const Name = styled.h3`
  font-size: 1rem;
  padding-bottom: 10px;
  text-align: left;
  font-weight: 600px;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
