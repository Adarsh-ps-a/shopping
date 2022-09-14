export let BASEURL = process.env.REACT_APP_API_URL;
export const APIErrorMsg = "Something went wrong";

export const APIURL = {
  GET_CATEGORIES: `${BASEURL}/products/categories`,
  GET_PRODUCT_BY_CATEGORY: `${BASEURL}/products/category`,
  GET_PRODUCT_BY_ID: `${BASEURL}/products`,
};
