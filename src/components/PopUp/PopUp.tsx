import React from "react";
import axios from "axios";
import { CharacterData } from "../../types/interfaces";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import CloseIcon from "../../assets/icons/x-icon.svg";

import * as S from "./PopUp.style";

interface Props {
  data: CharacterData;
  onClick: () => void;
}

const PopUp: React.FC<Props> = ({ data, onClick }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [homeWorldData, setHomeWorldData] = React.useState({
    name: "",
    diameter: "",
    climate: "",
    terrain: "",
    population: "",
  });

  const getHomeWorldData = () => {
    axios.get(data.homeworldURL).then((response: any) => {
      const data = response.data;

      setHomeWorldData({
        name: data.name,
        diameter: data.diameter,
        climate: data.climate,
        terrain: data.terrain,
        population: data.population,
      });
      setIsLoading(false);
      console.log(response.data);
    });
  };

  React.useEffect(() => {
    getHomeWorldData();
  }, []);

  return (
    <S.Backdrop>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <S.Wrapper>
          <S.PopUpHeader>
            <S.Name>{data.name}</S.Name>
            <S.CloseButton onClick={onClick} src={CloseIcon} />
          </S.PopUpHeader>

          <S.InfoBlock>
            <S.InfoItem>
              Created: <span>{data.created}</span>
            </S.InfoItem>
            <S.InfoItem>
              Height: <span>{data.height}</span>
            </S.InfoItem>
            <S.InfoItem>
              Mass: <span>{data.mass}</span>
            </S.InfoItem>
            <S.InfoItem>
              Born: <span>{data.birthYear}</span>
            </S.InfoItem>
          </S.InfoBlock>

          <S.InfoBlock>
            <S.HomeWorldName>
              Homeworld: <span>{homeWorldData.name}</span>
            </S.HomeWorldName>
            <S.InfoItem>
              Diameter: <span>{homeWorldData.diameter}</span>
            </S.InfoItem>
            <S.InfoItem>
              Climate: <span>{homeWorldData.climate}</span>
            </S.InfoItem>
            <S.InfoItem>
              Terrain: <span>{homeWorldData.terrain}</span>
            </S.InfoItem>
            <S.InfoItem>
              Population: <span>{homeWorldData.population}</span>
            </S.InfoItem>
          </S.InfoBlock>
        </S.Wrapper>
      )}
    </S.Backdrop>
  );
};

export default PopUp;
