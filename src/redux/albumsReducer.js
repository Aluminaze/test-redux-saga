import { ADD_ALBUMS } from "./types";

const initialState = {
  albums: [],
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALBUMS:
      return {
        ...state,
        albums: [...state.albums, ...action.payload],
      };
    default:
      return state;
  }
};
