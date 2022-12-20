import { actionTypes } from "./actionTypes";

export const initualState = {};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {};

    default:
      return state;
  }
};
