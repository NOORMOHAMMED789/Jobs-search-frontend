const actions = {
  searchText: "SEARCH_TEXT",
  search: "SEARCH",
  getAllPosts: "GET_ALL_POSTS",
  resultsCount:"RESULTS_COUNT",
  jobsData:"JOBS_DATA",
  checkedPost:"CHECKED_POST",
};

const initialState = {
  searchText: "",
  search: false,
  getAllPosts: true,
  resultsCount:0,
  jobsData:"",
  checkedPost:{name:"",checked:false},
  
};

const reducer = (state, action) => {
  const { type, data, checked } = action;
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
      res = { ...state, jobsData: data };
      break;
    case actions.checkedPost:
      res = { ...state, checkedPost: {name: data, checked: checked}}
    default:
      break;
  }
  return res;
};

export { actions, initialState, reducer };
