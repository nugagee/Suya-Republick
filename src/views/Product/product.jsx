import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./product.css";
import SideBar from "../../components/SideBar";
import beefSuya from "../../assets/img/suya/Beef-Suya-2.jpg";
import lambSuya from "../../assets/img/suya/Lamb-Suya-3.jpg";
import shawarma from "../../assets/img/suya/Shawarma.jpg";
import Button from "../../components/Button";
import SelectComponent from "../../components/Dropdown";
import { COLOR_RED, COLOR_WHITE } from "../../components/constant";

const Product = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [productSpiceLevel, setProductSpiceLevel] = useState("");

  const spiceLevelOptions = [
    { value: "mild", name: "mild" },
    { value: "spicy", name: "spicy" },
    { value: "very spicy", name: "very spicy" },
  ];

  const optionSpiceLevel = spiceLevelOptions?.map((x) => ({
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
      <section className="product">
        <div className="container">
          <div className="row row-grid" style={{ padding: "200px 0 50px 0" }}>
            <div
              className="col-md-6 card-container-img"
              style={{ height: "650px", objectFit: "contain" }}
            >
              <img
                src={lambSuya}
                alt=""
                className=""
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="col-md-6 right-card"
              style={{ padding: "0 50px 0 100px" }}
            >
              <h2
                className="mt-3"
                // style={{ color: "#b7903c" }}
              >
                LAMB SUYA
              </h2>
              <h5 style={{ color: "#ff0000" }}>
                <b>£9.50</b>
              </h5>
              <p style={{ color: "#333333", marginBottom: "70px" }}>
                We serve the lamb suya with sliced red onions, tomatoes,
                cucumber with the Republick suya spice mix to complement its
                tender texture. It’s amazing!!
              </p>
              <div className="col-md-5 mb-4 ">
                <SelectComponent
                  options={optionSpiceLevel}
                  handleChange={(e) => setProductSpiceLevel(e.value)}
                  value={productSpiceLevel}
                  styles={colorStyles}
                  placeholder="Spice Level"
                  id="spice-level"
                />
              </div>
              <h5
                className="mt-3 mb-4 text-right"
                // style={{ color: "#b7903c" }}
              >
                <b>SUBTOTAL:</b>
              </h5>
              <p className="text-right" style={{ color: "#333333" }}>
                £9.50
              </p>
              <h5
                className="mt-3 mb-4 text-right"
                // style={{ color: "#b7903c" }}
              >
                <b>ADD-ONS TOTAL:</b>
              </h5>
              <p className="text-right" style={{ color: "#333333" }}>
                +£0.00
              </p>
              <h5
                className="mt-3 mb-4 text-right"
                // style={{ color: "#b7903c" }}
              >
                <b>TOTAL:</b>
              </h5>
              <p className="text-right" style={{ color: "#333333" }}>
                £9.50
              </p>
              <div
                className="row row-grid col-md-12 mt-5"
                // style={{ margin: "0 auto" }}
              >
                <SelectComponent
                  options={optionSpiceLevel}
                  handleChange={(e) => setProductSpiceLevel(e.value)}
                  value={productSpiceLevel}
                  styles={colorStyles}
                  placeholder="Spice Level"
                  id="spice-level"
                />
                <Button
                  text="ADD TO CART"
                  // handleButtonClick={handleRoundWay}
                  type="button"
                  btnstyle={{
                    background: COLOR_RED,
                    color: COLOR_WHITE,
                    width: "170px",
                    // margin: "20px 0",
                    // fontFamily: "Euclid Circular B",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="related-products mb-5">
            <h3 style={{ color: "#b7903c", margin: "50px 0" }}>RELATED PRODUCTS</h3>
            <div className="row row-grid">
              <div className="col-md-3">
                <div className="card-container text-center">
                  <div
                    className="card-container-img"
                    style={{ width: "300px", objectFit: "contain" }}
                  >
                    <img
                      src={lambSuya}
                      alt=""
                      className=""
                      loading="lazy"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <h6 className="mt-3" style={{ color: "#b7903c" }}>
                    LAMB SUYA
                  </h6>
                  <h6 style={{ color: "#ff0000" }}>£9.50</h6>
                  <div className="col-md-6" style={{ margin: "0 auto" }}>
                    <Button
                      text="SELECT ITEM"
                      // handleButtonClick={() => {
                      //   navigate("/product/1");
                      // }}
                      type="button"
                      btnstyle={{
                        background: "red",
                        color: "white",
                        margin: "20px 0",
                        // fontFamily: "Euclid Circular B",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-container text-center">
                  <div
                    className="card-container-img"
                    style={{ width: "300px",height: "300px", objectFit: "contain" }}
                  >
                    <img
                      src={shawarma}
                      alt=""
                      className=""
                      loading="lazy"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <h6 className="mt-3" style={{ color: "#b7903c" }}>
                    CLASSIC CHICKEN SHAWARMA
                  </h6>
                  <h6 style={{ color: "#ff0000" }}>£9.99</h6>
                  <div className="col-md-6" style={{ margin: "0 auto" }}>
                    <Button
                      text="SELECT ITEM"
                      // handleButtonClick={() => {
                      //   navigate("/product/2");
                      // }}
                      type="button"
                      btnstyle={{
                        background: "red",
                        color: "white",
                        margin: "20px 0",
                        // fontFamily: "Euclid Circular B",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-container text-center">
                  <div
                    className="card-container-img"
                    style={{ width: "300px", objectFit: "contain" }}
                  >
                    <img
                      src={beefSuya}
                      alt=""
                      className=""
                      loading="lazy"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <h6 className="mt-3" style={{ color: "#b7903c" }}>
                    BEEF SUYA
                  </h6>
                  <h6 style={{ color: "#ff0000" }}>£9.50</h6>
                  <div className="col-md-6" style={{ margin: "0 auto" }}>
                    <Button
                      text="SELECT ITEM"
                      // handleButtonClick={() => {
                      //   navigate("/product/3");
                      // }}
                      type="button"
                      btnstyle={{
                        background: "red",
                        color: "white",
                        margin: "20px 0",
                        // fontFamily: "Euclid Circular B",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Product;
