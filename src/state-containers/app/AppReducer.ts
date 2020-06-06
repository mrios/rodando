import { TOGGLE_MENU, ActionType } from './AppTypes';

const toggleMenu = (payload: Object, state: { isCollapsed: boolean }) => {
  return { ...state, isCollapsed: payload };
};

export const appReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return toggleMenu(action.payload, state);
    default:
      return state;
  }
};
