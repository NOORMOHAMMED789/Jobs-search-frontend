const actions = {
  searchText: "SEARCH_TEXT",
  search: "SEARCH",
};

const initialState = {
  searchText: "",
  search: false,
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
    default:
      break;
  }
  return res;
};

export { actions, initialState, reducer };
