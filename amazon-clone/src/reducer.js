export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
    console.log("ACTION:", action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return { 
          ...state,
          basket: [...state.basket, action.item]
        };
    case "REMOVE_FROM_BASKET":
      // login for removing item from basket
      return { state };
    default:
      return state;
  }
}

export default reducer;
