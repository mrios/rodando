export const TOGGLE_MENU = 'TOGGLE_MENU';

export interface ActionType {
  type: string;
  payload: Object;
}

export type InitialStateAppType = {
  isCollapsed: boolean;
};
