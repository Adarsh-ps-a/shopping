import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Component/Header";
import { useHistory } from "react-router-dom";
import {
  getCategories,
  getProductList,
} from "../reducer/Actions/productAction";
import CategoryImg from "../assets/Images/item.jpg";
import { paths } from "../constants/paths";
import "./index.scss";

const Homepage = (props) => {
  const history = useHistory();
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    props?.getCategories();
  }, []);

  useEffect(() => {
    if (props?.categoryList) {
      setCategoryData(props?.categoryList);
    }
  }, [props?.categoryList]);

  const handleOpenProducts = (i) => {
    history.push({ pathname: paths.PRODUCT_LIST.pathName, state: { val: i } });
  };

  return (
    <div>
      <Header />
      <h2>Categories</h2>

      <div className='categories-container'>
        {categoryData?.map((i) => {
          return (
            <div className='categories-item-container'>
              <img
                src={CategoryImg}
                alt='category'
                onClick={() => handleOpenProducts(i)}
              />
              <h3 onClick={() => handleOpenProducts(i)}>{i}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  getCategories,
  getProductList,
};
const mapStateToProps = (state) => {
  return {
    categoryList: state.getCategoryReducer?.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
