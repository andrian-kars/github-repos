import { createSlice } from "@reduxjs/toolkit";
import { getSearchRepos } from "src/api/services/searchService";
import { OPERATION_CANCELLED } from "src/constants";

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

      if (error === OPERATION_CANCELLED) return;

      state.error = error;
      state.isLoading = false;
      console.error(error);
    },
  },
});

export const fetchGetSearchRepos =
  (searchValue, currPage) => async (dispatch) => {
    try {
      dispatch(searchSlice.actions.setLoading(true));
      const fetchedSearchRepos = await getSearchRepos(searchValue, currPage);
      dispatch(searchSlice.actions.setContent(fetchedSearchRepos.data));
    } catch (e) {
      dispatch(searchSlice.actions.setError(e.message));
    }
  };

export const { setContent, setLoading, setError } = searchSlice.actions;
export default searchSlice.reducer;
