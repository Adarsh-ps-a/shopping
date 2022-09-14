import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Component/Header";
import {
  getProductDetails,
  addProductToCart,
} from "../reducer/Actions/productAction";
import "./index.scss";

const ProductDetails = (props) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    props?.getProductDetails(props?.location?.state?.val?.id);
  }, [props?.location?.state?.val]);

  useEffect(() => {
    if (props?.productDetails) {
      setProductData(props?.productDetails);
    }
  }, [props?.productDetails]);

  const handleAddtoCart = () => {
    props?.addProductToCart(productData);
  };

  return (
    <div className='product-page-container'>
      <Header />
      <h2>Product Details</h2>
      <h3>{productData?.title}</h3>
      <img src={productData?.image} alt='product' />
      <div>
        Rating :<b>{productData?.rating?.rate} </b>/5 Out of{" "}
        <b>{productData?.rating?.count}</b> Ratings{" "}
      </div>
      <p>
        Price : <b>&#x20B9;{productData?.price}</b>
      </p>
      <p> Description: {productData?.description}</p>
      <div className='product-Details-container'></div>
      <button onClick={handleAddtoCart}>Add to Cart</button>
    </div>
  );
};
const mapDispatchToProps = {
  getProductDetails,
  addProductToCart,
};
const mapStateToProps = (state) => {
  return {
    productDetails: state.getProductReducer?.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
