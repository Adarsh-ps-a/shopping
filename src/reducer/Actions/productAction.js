import { APIURL } from "../../constants/apiConstants";
import { ACTIONS } from "../../constants/actionConstant";
import apiService from "../../api/apiService";

export const getCategoryStarted = () => {
  return { type: ACTIONS.getCategoryStarted };
};
export const getCategorySuccess = (data) => {
  return { type: ACTIONS.getCategorySuccess, data };
};
export const getCategoryFailure = () => {
  return { type: ACTIONS.getCategoryFailure };
};

export const getProductListStarted = () => {
  return { type: ACTIONS.getProductListStarted };
};
export const getProductListSuccess = (data) => {
  return { type: ACTIONS.getProductListSuccess, data };
};
export const getProductListFailure = () => {
  return { type: ACTIONS.getProductListFailure };
};

export const getProductStarted = () => {
  return { type: ACTIONS.getProductStarted };
};
export const getProductSuccess = (data) => {
  return { type: ACTIONS.getProductSuccess, data };
};
export const getProductFailure = () => {
  return { type: ACTIONS.getProductFailure };
};

export const addProductSuccess = (data) => {
  return { type: "PRODUCT_ADDED", data };
};

export const getCategories = () => {
  return (dispatch) => {
    dispatch(getCategoryStarted());
    apiService
      .get(APIURL.GET_CATEGORIES)
      .then((response) => {
        if (response) {
          dispatch(getCategorySuccess(response));
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        dispatch(getCategoryFailure());
        alert("Error");
      });
  };
};

export const getProductList = (payload) => {
  return (dispatch) => {
    dispatch(getProductListStarted());
    const URL = `${APIURL.GET_PRODUCT_BY_CATEGORY}/${payload}`;
    apiService
      .get(URL)
      .then((response) => {
        if (response) {
          dispatch(getProductListSuccess(response));
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        dispatch(getProductListFailure());
        alert("Error");
      });
  };
};

export const getProductDetails = (payload) => {
  return (dispatch) => {
    dispatch(getProductStarted());
    const URL = `${APIURL.GET_PRODUCT_BY_ID}/${payload}`;
    apiService
      .get(URL)
      .then((response) => {
        if (response) {
          dispatch(getProductSuccess(response));
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        dispatch(getProductFailure());
        alert("Error");
      });
  };
};

export const addProductToCart = (payload) => {
  return (dispatch, getState) => {
    const data = getState().getCartReducer?.data || [];
    data.push(payload);
    dispatch(addProductSuccess(data));
  };
};
