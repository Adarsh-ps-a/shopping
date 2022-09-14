import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Component/Header";
import { useHistory } from "react-router-dom";
import { getProductList } from "../reducer/Actions/productAction";
import { paths } from "../constants/paths";
import "./index.scss";

const CartList = (props) => {
  const history = useHistory();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (props?.cartList) {
      setProductData(props?.cartList);
    }
  }, [props?.cartList]);

  const handleOpenProducts = (i) => {
    history.push({
      pathname: paths.PRODUCT_DETAILS.pathName,
      state: { val: i },
    });
  };

  return (
    <div className='product-page-container'>
      <Header />
      <h2>Cart Items</h2>

      <div className='product-container'>
        {productData?.map((i) => {
          return (
            <div className='product-item-container'>
              <img src={i?.image} alt='category' />
              <h3>{i?.title}</h3>
              <p>
                Price : <b>&#x20B9;{i?.price}</b>
              </p>
              <span onClick={() => handleOpenProducts(i)}>View Details</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  getProductList,
};
const mapStateToProps = (state) => {
  return {
    cartList: state.getCartReducer?.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
