export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song
});

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId
});
