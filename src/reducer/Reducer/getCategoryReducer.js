import { ACTIONS } from "../../constants/actionConstant";

const initialState = {
  isLoading: false,
};

const getCategoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.getCategoryStarted:
      return {
        ...state,
        isLoading: true,
        err: null,
      };

    case ACTIONS.getCategorySuccess: //api success
      return {
        ...state,
        ...action,
        isLoading: false,
      };
    case ACTIONS.getCategoryFailure: // api fail
      return {
        ...state,
        err: "Error",
        isLoading: false,
      };

    default:
      return state;
  }
};

export default getCategoryReducer;
