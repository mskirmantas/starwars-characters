import React, { useEffect } from "react";
import { CharacterData } from "../../types/interfaces";

import * as S from "./CharacterCard.style";

interface Props {
  data: CharacterData;
  idx: number;
  onCardClick: () => void;
}

const CharacterCard: React.FC<Props> = ({ data, idx, onCardClick }) => {
  const [image, setImage] = React.useState("");

  useEffect(() => {
    setImage(`https://picsum.photos/200?random=${idx}`);
  }, []);

  return (
    <S.Card className="character-card" onClick={onCardClick}>
      <S.Name>{data.name}</S.Name>
      {image && <S.Image src={image} />}
    </S.Card>
  );
};

export default CharacterCard;
