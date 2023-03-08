import styled from "styled-components";
import { theme } from "../../styles";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  border: 2px solid ${theme.color.yellow};
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${theme.color.black};
  text-align: left;
  width: 50%;

  @media (max-width: 600px) {
    width: calc(100% - 4rem);
  }
`;
export const PopUpHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${theme.color.yellow};
  margin-bottom: 1.5rem;
`;

export const Name = styled.h3`
  font-size: 25px;
  font-weight: 600;
`;

export const HomeWorldName = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1rem;

  span {
    margin-left: 0.5rem;
  }
`;

export const InfoBlock = styled.ul`
  line-height: 1.6;

  &:not(:last-child) {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid ${theme.color.yellow};
  }
`;

export const InfoItem = styled.li`
  font-weight: 300;
  text-transform: capitalize;
  letter-spacing: 0.05em;

  span {
    margin-left: 0.5rem;
    font-weight: 600;
  }
`;

export const CloseButton = styled.img`
  transition: all 0.35s ease-out;

  cursor: pointer;

  transform: scale(1);
  width: 15px;
  height: 15px;

  &:hover {
    transform: scale(1.15);
  }
`;
