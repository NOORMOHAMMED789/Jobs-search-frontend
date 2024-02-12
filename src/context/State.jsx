const actions = {
  searchText: "SEARCH_TEXT",
  search: "SEARCH",
  getAllPosts: "GET_ALL_POSTS",
  resultsCount:"RESULTS_COUNT",
  jobsData:"JOBS_DATA"
};

const initialState = {
  searchText: "",
  search: false,
  getAllPosts: true,
  resultsCount:0,
  jobsData:""
};

const reducer = (state, action) => {
  const { type, data } = action;
  let res = state;
  switch (type) {
    case actions.searchText:
      res = { ...state, searchText: data };
      break;
    case actions.search:
      res = { ...state, search: data };
      break;
    case actions.getAllPosts:
      res = { ...state, getAllPosts: data };
      break;
    case actions.resultsCount:
      res = { ...state, resultsCount: data};
      break;
    case actions.jobsData:
      res = { ...state, jobsData: [] };
      break;
    default:
      break;
  }
  return res;
};

export { actions, initialState, reducer };
