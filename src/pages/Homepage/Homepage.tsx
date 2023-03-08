import React from "react";
import { AppContext } from "../../context/AppContext";
import { CharacterData } from "../../types/interfaces";

import Header from "../../components/Header/Header";
import StarWarsLogo from "../../assets/icons/star-wars-logo.svg";
import CharacterList from "../../components/CharacterList/CharacterList";
import PopUp from "../../components/PopUp/PopUp";

import { API } from "../../API/apiProvider";

import * as S from "./Homepage.style";

const Homepage: React.FC = () => {
  const { appState, appDispatch } = React.useContext(AppContext);

  const { isLoading, displayPopUp, charactersData, activeCharacterData } =
    appState;

  const getPeople = () => {
    API.get("/people")
      .then((response) => {
        const fetchedData = response.data.results;

        let data = fetchedData.map((item: any) => {
          return {
            name: item.name,
            created: item.created,
            mass: item.mass,
            height: item.height,
            birthYear: item.birth_year,
            homeworldURL: item.homeworld,
          };
        });

        appDispatch({
          type: "SET_CHARACTERS_DATA",
          charactersData: data,
        });

        appDispatch({
          type: "SET_LOADING",
          isLoading: false,
        });
      })
      .catch((error) => {
        appDispatch({
          type: "SET_LOADING",
          isLoading: false,
        });
        console.log("getPeople error: " + error);
      });
  };

  React.useEffect(() => {
    getPeople();
  }, []);

  const handlePopUpOpen = (data: CharacterData) => {
    appDispatch({
      type: "SET_ACTIVE_CHARACTER_DATA",
      activeCharacterData: data,
    });

    appDispatch({
      type: "TOGGLE_POPUP",
      displayPopUp: true,
    });
  };

  const handlePopUpClose = () => {
    appDispatch({
      type: "RESET_ACTIVE_CHARACTER_DATA",
    });

    appDispatch({
      type: "TOGGLE_POPUP",
      displayPopUp: false,
    });
  };

  return (
    <S.Wrapper>
      <Header />
      <S.Logo src={StarWarsLogo} />

      {!isLoading && (
        <>
          <S.SubHeading>Characters</S.SubHeading>
          <CharacterList
            characterData={charactersData}
            handlePopUpOpen={handlePopUpOpen}
          />
        </>
      )}

      {displayPopUp && (
        <PopUp data={activeCharacterData} onClick={handlePopUpClose} />
      )}
    </S.Wrapper>
  );
};

export default Homepage;
