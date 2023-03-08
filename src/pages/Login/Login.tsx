import React from "react";
import { authenticateUser } from "../../auth/authenticateUser";
import { AppContext } from "../../context/AppContext";

import Button from "../../components/Button/Button";

import * as S from "./Login.style";

const Login: React.FC = () => {
  const { appDispatch } = React.useContext(AppContext);

  React.useEffect(() => {
    setTimeout(() => {
      appDispatch({
        type: "SET_LOADING",
        isLoading: false,
      });
    }, 200);
  }, []);

  const handleLogin = () => {
    authenticateUser();
    appDispatch({
      type: "SET_LOADING",
      isLoading: true,
    });
  };

  return (
    <S.Wrapper>
      <S.Heading>Login Page</S.Heading>
      <Button onButtonClick={handleLogin}>Log in</Button>
    </S.Wrapper>
  );
};

export default Login;
