import { CharacterData } from "../types/interfaces";

export interface AppStateType {
  isLoading: boolean;
  displayPopUp: boolean;
  charactersData: CharacterData[];
  activeCharacterData: CharacterData;
}
export type AppActionType =
  | {
      type: "SET_LOADING";
      isLoading: boolean;
    }
  | {
      type: "TOGGLE_POPUP";
      displayPopUp: boolean;
    }
  | {
      type: "SET_CHARACTERS_DATA";
      charactersData: CharacterData[];
    }
  | {
      type: "SET_ACTIVE_CHARACTER_DATA";
      activeCharacterData: CharacterData;
    }
  | {
      type: "RESET_ACTIVE_CHARACTER_DATA";
    };
