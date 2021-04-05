import { ADD_ALBUMS, ASYNC_INCREMENT, FETCH_ALBUMS, INCREMENT } from "./types";

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

export const fetchAlbumsAC = () => {
  return {
    type: FETCH_ALBUMS,
  };
};

export const addAlbumsAC = (albums) => {
  return {
    type: ADD_ALBUMS,
    payload: albums,
  };
};
