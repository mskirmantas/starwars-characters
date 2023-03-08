import React from "react";
import { CharacterData } from "../../types/interfaces";

import CharacterCard from "../CharacterCard/CharacterCard";

import * as S from "./CharacterList.style";

interface Props {
  characterData: CharacterData[];
  handlePopUpOpen: (characterDataItem: CharacterData) => void;
}

const CharacterList: React.FC<Props> = ({ characterData, handlePopUpOpen }) => {
  return (
    <S.List>
      {characterData &&
        characterData.map((dataItem: CharacterData, idx: number) => {
          return (
            <CharacterCard
              key={idx}
              idx={idx}
              data={dataItem}
              onCardClick={() => handlePopUpOpen(dataItem)}
            />
          );
        })}
    </S.List>
  );
};

export default CharacterList;
