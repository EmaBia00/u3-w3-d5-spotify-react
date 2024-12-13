import { SET_CURRENT_SONG, TOGGLE_LIKE } from "../actions/musicPlayerAction";

const initialState = {
  currentSong: null,
  likedSongs: {}
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload
      };

    case TOGGLE_LIKE: {
      const newLikedSongs = { ...state.likedSongs };
      const songId = action.payload;
      newLikedSongs[songId] = !newLikedSongs[songId];
      return {
        ...state,
        likedSongs: newLikedSongs
      };
    }

    default:
      return state;
  }
};

export default musicPlayerReducer;
