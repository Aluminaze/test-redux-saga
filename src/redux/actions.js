import { ASYNC_INCREMENT, INCREMENT } from "./types";

export const asyncIncrementAC = () => {
  return {
    type: ASYNC_INCREMENT,
  };
};

export const incrementAC = () => {
  return {
    type: INCREMENT,
  };
};
