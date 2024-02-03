const actions = {
  searchText: "SEARCH_TEXT",
  search: "SEARCH",
  getAllPosts: "GET_ALL_POSTS",
};

const initialState = {
  searchText: "",
  search: false,
  getAllPosts: true,
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
    default:
      break;
  }
  return res;
};

export { actions, initialState, reducer };
