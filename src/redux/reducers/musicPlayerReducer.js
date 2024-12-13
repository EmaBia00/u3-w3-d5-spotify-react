import { SET_CURRENT_SONG, TOGGLE_LIKE, SET_SEARCH_RESULTS } from "../actions/musicPlayerAction";

const initialState = {
  searchResults: [],
  currentSong: null,
  likedSongs: {}
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
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
