import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Component/Header";
import { useHistory } from "react-router-dom";
import { getProductList } from "../reducer/Actions/productAction";
import CategoryImg from "../assets/Images/item.jpg";
import { paths } from "../constants/paths";
import "./index.scss";

const ProductList = (props) => {
  const history = useHistory();
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    props?.getProductList(props?.location?.state?.val);
  }, [props?.location?.state?.val]);

  useEffect(() => {
    if (props?.productList) {
      setProductData(props?.productList);
    }
  }, [props?.productList]);

  const handleOpenProducts = (i) => {
    history.push({
      pathname: paths.PRODUCT_DETAILS.pathName,
      state: { val: i },
    });
  };

  return (
    <div className='product-page-container'>
      <Header />
      <h2>{props?.location?.state?.val} Products</h2>

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
    productList: state.getProductList?.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
