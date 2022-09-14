import { ACTIONS } from "../../constants/actionConstant";

const initialState = {
  isLoading: false,
};

const getProductReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.getProductStarted:
      return {
        ...state,
        isLoading: true,
        err: null,
      };

    case ACTIONS.getProductSuccess: //api success
      return {
        ...state,
        ...action,
        isLoading: false,
      };
    case ACTIONS.getProductFailure: // api fail
      return {
        ...state,
        err: "Error",
        isLoading: false,
      };

    default:
      return state;
  }
};

export default getProductReducer;
