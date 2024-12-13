// Costanti da richiamare nel reducers per evitare di sbagliare a scrivere il type
export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results
});

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song
});

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId
});
