import styled from "styled-components";
import { theme } from "../../styles";

export const Button = styled.button`
  color: ${theme.color.yellow};
  background-color: ${theme.color.black};
  border: 1px solid ${theme.color.yellow};
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 0.85rem;
  transition: all 0.75s ease;

  &:hover {
    box-shadow: 0 0 35px rgba(209, 182, 10, 0.85);
  }
`;
