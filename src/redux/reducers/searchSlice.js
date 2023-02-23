import { createSlice } from "@reduxjs/toolkit";
import { getSearchRepos } from "src/api/services/searchService";

const initialState = {
  content: null,
  isLoading: true,
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      const error = action.payload;

      state.error = error;
      state.isLoading = false;
      console.error(error);
    },
  },
});

export const fetchGetSearchRepos = (searchValue) => async (dispatch) => {
  try {
    dispatch(searchSlice.actions.setLoading(true));
    const fetchedSearchRepos = await getSearchRepos(searchValue);
    dispatch(searchSlice.actions.setContent(fetchedSearchRepos.data));
  } catch (e) {
    dispatch(searchSlice.actions.setError(e.message));
  }
};

export const { setContent, setLoading, setError } = searchSlice.actions;
export default searchSlice.reducer;
