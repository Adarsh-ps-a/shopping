import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { paths } from "../constants/paths";
import Homepage from "../pages/HomePage";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import CartList from "../pages/CartList";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={paths.HOME.pathName} component={Homepage} />
      <Route exact path={paths.PROFILE.pathName} />
      <Route exact path={paths.CART_LIST.pathName} component={CartList} />
      <Route exact path={paths.PRODUCT_LIST.pathName} component={ProductList} />
      <Route
        exact
        path={paths.PRODUCT_DETAILS.pathName}
        component={ProductDetails}
      />
    </Switch>
  </BrowserRouter>
);
export default Router;
