import React from "react";

import Spinner from "../Spinner/Spinner";

import * as S from "./LoadingScreen.style";

const LoadingScreen: React.FC = () => {
  return (
    <S.Wrapper>
      <Spinner />
    </S.Wrapper>
  );
};

export default LoadingScreen;
