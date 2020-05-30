import React, { createContext, useReducer } from 'react';
import { InitialStateType } from './AppTypes';
import projectFakeData from './../fake-data/projects';

import { appReducer } from './Reducer';

const initialState = {
  isCollapsed: false,
  projects: projectFakeData,
};

const AppContext = createContext<{
  state: InitialStateType;
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
