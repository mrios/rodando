export const TOGGLE_MENU = 'TOGGLE_MENU';
export interface ActionType {
  type: string;
  payload: Object;
}

export type InitialStateType = {
  isCollapsed: boolean;
};

export const initialState = {
  isCollapsed: false,
};
