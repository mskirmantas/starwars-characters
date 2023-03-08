import React, { createContext, useReducer } from "react";
import { AppStateType, AppActionType } from "./types";
import { appReducer, initialAppState } from "./reducer";
export interface AppContextProps {
  appState: AppStateType;
  appDispatch: React.Dispatch<AppActionType>;
}
export const AppContext = createContext<AppContextProps>({
  appState: initialAppState,
  appDispatch: () => null,
});
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [appState, appDispatch] = useReducer(appReducer, initialAppState);
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};
