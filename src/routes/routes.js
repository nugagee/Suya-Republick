import React from "react";
// import { Route, Router, Routes, Switch } from "react-router-dom";
import history from "../services/history";
import HomeComponent from "../views/HomePage/index";
// import LoginComponent from "../views/LoginPage/index";
// import LoginTwoComponent from "../views/LoginPage/login";
import NotFound from "../views/NotFoundPage/index";
// import RegisterComponent from "../views/RegisterPage/index";
// import { DashboardComponent } from "../views/UserProfile/Dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurMenu from "../views/Our Menu/menu";
import Product from "../views/Product/product";
import Cart from "../views/Cart/cart";
import Checkout from "../views/Checkout/checkout";

const AllPages = () => (
  <Router>
  {/* <Router history={history}> */}
    <Routes>
      {/* <Route path="/dashboard" component={DashboardComponent} /> */}
      {/* <Route path="/login" component={LoginComponent} /> */}
      {/* <Route path="/signin" component={LoginTwoComponent} /> */}
      {/* <Route path="/Register" component={RegisterComponent} /> */}
      {/* <Route exact={true} path="/" component={HomeComponent} /> */}
      <Route exact path="/" element={<HomeComponent />} />
      <Route exact path="/our-menu" element={<OurMenu />} />
      <Route exact path="/product/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AllPages;
