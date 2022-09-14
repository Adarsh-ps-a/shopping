import { ACTIONS } from "../../constants/actionConstant";

const initialState = {
  isLoading: false,
};

const getCartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "PRODUCT_ADDED": //api success
      return {
        ...state,
        data: action?.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getCartReducer;
