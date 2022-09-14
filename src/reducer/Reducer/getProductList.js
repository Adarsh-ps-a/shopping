import { ACTIONS } from "../../constants/actionConstant";

const initialState = {
  isLoading: false,
};

const getProductListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.getProductListStarted:
      return {
        ...state,
        isLoading: true,
        err: null,
      };

    case ACTIONS.getProductListSuccess: //api success
      return {
        ...state,
        ...action,
        isLoading: false,
      };
    case ACTIONS.getProductListFailure: // api fail
      return {
        ...state,
        err: "Error",
        isLoading: false,
      };

    default:
      return state;
  }
};

export default getProductListReducer;
