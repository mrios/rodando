import React, { createContext, useReducer } from 'react';
import { InitialStateAppType } from './AppTypes';
import { appReducer } from './AppReducer';

const initialState = {
  isCollapsed: false,
};

const AppContext = createContext<{
  state: InitialStateAppType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
