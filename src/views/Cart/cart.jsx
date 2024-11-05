import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./cart.css";
import SideBar from "../../components/SideBar";
import beefSuya from "../../assets/img/suya/Beef-Suya-2.jpg";
import lambSuya from "../../assets/img/suya/Lamb-Suya-3.jpg";
import shawarma from "../../assets/img/suya/Shawarma.jpg";
import Button from "../../components/Button";
import SelectComponent from "../../components/Dropdown";
import { COLOR_RED, COLOR_WHITE } from "../../components/constant";

const Cart = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [productQuantity, setProductQuantity] = useState("");

  const quantityOptions = [
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
  ];

  const optionQuantity = quantityOptions?.map((x) => ({
    label: x.name,
    value: x.value,
  }));

  const colorStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted black",
      color: state.isSelected ? "black" : "black",
      background: "white",
    }),

    menu: (provided, state) => ({
      ...provided,
      // borderBottom: '1px dotted pink',
      // color: state.isSelected ? 'red' : 'blue',
      // padding: 20,
      background: "white",
    }),

    singleValue: () => {
      const color = "black";

      return { color };
    },
  };

  return (
    <div>
      <Navbar />
      <section className="our-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="mb-2">CART</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="cart-table-head container mt-5">
        <div className="row">
          <h4 className="col-md-5">PRODUCT</h4>
          <h4 className="col-md-2">PRICE</h4>
          <h4 className="col-md-3">QUANTITY</h4>
          <h4 className="col-md-2">SUBTOTAL</h4>
        </div>
        <hr />
      </section>

      <section className="cart-items container mt-5">
        <div className="row" style={{ alignItems: "center" }}>
          <h4 className="row col-md-5" style={{ alignItems: "center" }}>
            <div
              className="card-container-img mr-3"
              style={{ height: "100px", objectFit: "contain" }}
            >
              <img
                src={lambSuya}
                alt=""
                className=""
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h6 className="" style={{ color: "#b7903c" }}>
              LAMB SUYA
            </h6>
          </h4>
          <p className="col-md-2">£9.50</p>
          <h4 className="col-md-3">
            {" "}
            <SelectComponent
              options={optionQuantity}
              handleChange={(e) => setProductQuantity(e.value)}
              value={productQuantity}
              styles={colorStyles}
              placeholder="Spice Level"
              id="spice-level"
            />
          </h4>
          <p className="col-md-2">£9.50</p>
        </div>
        <div className="col-md-2" style={{ margin: "0 auto" }}>
          <Button
            text="UPDATE CART"
            // handleButtonClick={() => {
            //   navigate("/product/1");
            // }}
            type="button"
            btnstyle={{
              background: COLOR_RED,
              color: "white",
              margin: "20px 0",
              // fontFamily: "Euclid Circular B",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          />
        </div>
        <h1
          className="mt-3 mb-5"
          // style={{ color: "#b7903c" }}
        >
          CART TOTALS
        </h1>

        <div className="row" style={{ alignItems: "center" }}>
          <h6
            className="col-md-3"
            // style={{ color: "#b7903c" }}
          >
            SUBTOTAL
          </h6>
          <p className="col-md-9">£9.50</p>
        </div>
        <hr />
        <div className="row" style={{ alignItems: "center" }}>
          <h6
            className="col-md-3"
            // style={{ color: "#b7903c" }}
          >
            SHIPPING
          </h6>
          <div className="col-md-9 text-center">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="exampleCheck1"
                name="pickup"
                value="yes"
                // onChange={() => handlePickup()}
              />
              <label className="label-auth" htmlFor="exampleCheck1">
                Delivery and delivery fee only applicable to our Suya Spice
                product.
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="exampleCheck2"
                name="pickup"
                value="no"
                // onChange={() => setIsPickup(false)}
              />
              <label className="label-auth" htmlFor="exampleCheck2">
                All orders are to be collected in-store at 303 Chester road
                Manchester M15 4EY
              </label>
            </div>
            <p className="col-md-9">
              Shipping options will be updated during checkout.
            </p>
          </div>
        </div>
        <hr />
        <div className="row" style={{ alignItems: "center" }}>
          <h6
            className="col-md-3"
            // style={{ color: "#b7903c" }}
          >
            TOTAL
          </h6>
          <p className="col-md-9">
            <b>£9.50</b>
          </p>
        </div>
        <hr />

        <div className="col-md-4" style={{ margin: "0 auto" }}>
          <Button
            text="PROCEED TO CHECKOUT"
            // handleButtonClick={() => {
            //   navigate("/product/1");
            // }}
            type="button"
            btnstyle={{
              background: COLOR_RED,
              color: "white",
              margin: "20px 0",
              // fontFamily: "Euclid Circular B",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          />
        </div>
        <div className="col-md-4" style={{ margin: "0 auto" }}>
          <Button
            text="BUY WITH G-PAY"
            // handleButtonClick={() => {
            //   navigate("/product/1");
            // }}
            type="button"
            btnstyle={{
              background: "black",
              color: "white",
              margin: "20px 0",
              // fontFamily: "Euclid Circular B",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
