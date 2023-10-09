import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommends: null,
  newDisney: null,
  originals: null,
  trending: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, actions) => {
      state.recommends = actions.payload.recommends;
      state.newDisney = actions.payload.newDisney;
      state.originals = actions.payload.originals;
      state.trending = actions.payload.trending;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovies } = movieSlice.actions;

export const selectRecommends = (state) => state.movie.recommends;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginals = (state) => state.movie.originals;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
