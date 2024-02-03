const actions = {
  searchText: "SEARCH_TEXT",
};

const initialState = {
  searchText: "",
};

const reducer = (state, action) => {
  const { type, data } = action;
  let res = state;
  switch (type) {
    case actions.searchText:
      res = { ...state, searchText: data };
      break;
    default:
      break;
  }
  return res;
};

export { actions, initialState, reducer };
