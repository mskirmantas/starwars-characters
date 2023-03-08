import React from "react";

import * as S from "./Button.style";

interface Props {
  children: string;
  onButtonClick: () => void;
}

const Button: React.FC<Props> = ({ children, onButtonClick }) => {
  return <S.Button onClick={onButtonClick}>{children}</S.Button>;
};

export default Button;
