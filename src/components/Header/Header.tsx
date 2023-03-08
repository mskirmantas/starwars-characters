import React from "react";
import { AppContext } from "../../context/AppContext";

import Button from "../Button/Button";

import * as S from "./Header.style";

const Header: React.FC = () => {
  const { appDispatch } = React.useContext(AppContext);

  const handleLogout = () => {
    appDispatch({
      type: "SET_LOADING",
      isLoading: true,
    });
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <S.Header>
      <S.Container>
        <Button onButtonClick={handleLogout}>Log Out</Button>
      </S.Container>
    </S.Header>
  );
};

export default Header;
