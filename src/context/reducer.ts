import { AppStateType, AppActionType } from "./types";
export const initialAppState: AppStateType = {
  isLoading: true,
  displayPopUp: false,
  charactersData: [],
  activeCharacterData: {
    name: "",
    created: "",
    mass: "",
    height: "",
    birthYear: "",
    homeworldURL: "",
  },
};

export const appReducer = (
  state: AppStateType,
  action: AppActionType
): AppStateType => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case "TOGGLE_POPUP":
      return {
        ...state,
        displayPopUp: action.displayPopUp,
      };

    case "SET_CHARACTERS_DATA":
      return {
        ...state,
        charactersData: action.charactersData,
      };

    case "SET_ACTIVE_CHARACTER_DATA":
      return {
        ...state,
        activeCharacterData: action.activeCharacterData,
      };

    case "RESET_ACTIVE_CHARACTER_DATA":
      return {
        ...state,
        activeCharacterData: {
          name: "",
          created: "",
          mass: "",
          height: "",
          birthYear: "",
          homeworldURL: "",
        },
      };

    default:
      return state;
  }
};
