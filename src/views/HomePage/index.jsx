// import { addDays } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import Swal from "sweetalert2";
import phoneBg from "../../assets/img/phonebg.webp";
import appline from "../../assets/img/appline.svg";
import appleBtn from "../../assets/img/appstore.webp";
import cards from "../../assets/img/card.webp";
import googleBtn from "../../assets/img/google.webp";
import ep from "../../assets/img/man.webp";
import spiceText from "../../assets/img/suya/Suya-Spice-Text-1.png";
import spiceImage from "../../assets/img/suya/Suya-Spice-Banner.jpg";
import spiceImageGif from "../../assets/img/suya/Suya-Spice-Banner-gif.gif";
import platterImg from "../../assets/img/suya/Full-Platter-1.jpg";
import brandLogo from "../../assets/img/suya/Banner-brand.jpg";
import brandVideo from "../../assets/img/suya/SUYA-REPUBLICK-VIDEO_vid.mp4";
import newTag from "../../assets/img/new-flight.png";
import Navbar from "../../components/NavBar";
// import configs from "../../configs";
import apiroutes from "../../services/apiroutes";
import { request, requestSetting } from "../../services/apiservice";
import { getAuth, getUser, setAuth, setAuthWallet } from "../../services/auth";
import "./index.css";

export const HomeComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [popularData, setPopularData] = useState([]);
  const [routeLoading, setRouteLoading] = useState(true);
  const [bookRouteNowVisible, setBookRouteNowVisible] = useState(false);
  const [popularRouteDestination, setPopularRouteDestination] = useState("");
  const [popularRouteDeparture, setPopularRouteDeparture] = useState("");
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [adult, setAdult] = useState("1");
  const token = getAuth();
  const [toggleState, setToggleState] = useState(1);
  const [modalVisiblePopup, setVisiblePopup] = useState(false);
  const [modalVisibleNoticePopup, setModalVisibleNoticePopup] = useState(false);
  const [modalVisibleTravelstart, setVisibleTravelstart] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const navigate = useNavigate();
  useEffect(() => {
    // localStorage.removeItem("walletState");
  }, []);

  const toggleModalTravelstartClose = () => {
    setVisibleTravelstart(false);
    toggleTab(1);
    // console.log(window.innerWidth, "WINDOW WIDTH");
  };

  const adults = [];
  for (let i = 1; i <= 13; i++) {
    adults.push(i);
  }
  const adultOptions = adults.map((x) => ({ label: x, value: x }));

  const colorStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted black",
      color: state.isSelected ? "white" : "black",
    }),
    singleValue: () => {
      const color = "black";

      return { color };
    },
  };

  const toggleModalClose = () => {
    setBookRouteNowVisible(false);
    // window.location.reload();
  };

  const toggleModalPopupClose = () => {
    setVisiblePopup(false);
    toggleTab(1);
    // console.log(window.innerWidth, "WINDOW WIDTH");
  };
  const toggleModalNoticePopupClose = () => {
    setModalVisibleNoticePopup(false);
  };

  const width = 500;
  const width2 = 1200;
  const height = 580;
  const height2 = 500;
  const height3 = 650;
  // const modalTitle = `Book a Bus from ${popularRouteDeparture} to ${popularRouteDestination}`;
  const modalTitle = `Book a Bus from ${popularRouteDeparture?.replace(
    "=>",
    "-"
  )} to ${popularRouteDestination?.replace("=>", "-")}`;
  const modalPar = "Please enter details below to proceed.";
  // const modalPar2 = "Book A Flight.";

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div id="top" style={{ width: "100vw", overflowX: "hidden" }}>
      <Navbar />
      <section className="hero-bg">
        <div className="container">
          <div className="hero-flex">
            <div className="left-card align-self-center">
              <div className="app-section-image">
                <img
                  src={spiceText}
                  alt=""
                  className=""
                  loading="lazy"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="right-card align-self-center">
              <div className="app-section-image">
                <img
                  src={spiceImage}
                  alt=""
                  className=""
                  loading="lazy"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hot-trips pt-5 pb-5">
        <div className="container">
          <div className="row row-grid">
            <div className="col-md-12 align-self-center">
              <div className="prices-container text-center">
                <h3 style={{ color: "red" }}>S U Y A R E P U B L I C K</h3>
                <h1>
                  <b>We are bringing the taste of Africa to Manchester.</b>
                </h1>
                <p>
                  Our meals are made with natural, fresh and organic spices and
                  recipes from Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hot-cards pt-5 pb-5">
        <div className="container">
          <div className="row row-grid">
            <div className="col-md-4">
              <div className="card-container text-left">
                <div className="card-container-img">
                  <img
                    src={spiceImageGif}
                    alt=""
                    className=""
                    loading="lazy"
                    style={{ width: "100%" }}
                  />
                </div>
                <h3>
                  <b>SUYA SPICE</b>
                </h3>
                <p>Get your Suya spice anywhere anyime within UK</p>
                <h6 style={{ color: "#b7903c" }}>ORDER NOW</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-container text-left">
                <div className="card-container-img">
                  <img
                    src={platterImg}
                    alt=""
                    className=""
                    loading="lazy"
                    style={{ width: "100%" }}
                  />
                </div>
                <h3>
                  <b>OUR MENU</b>
                </h3>
                <p>
                  Our meals are made with natural, fresh and organic spices and
                  recipes from Africa.
                </p>
                <h6 style={{ color: "#b7903c" }}>OUR MENU</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-container text-left">
                <div className="card-container-img">
                  <img
                    src={brandLogo}
                    alt=""
                    className=""
                    loading="lazy"
                    style={{ width: "100%" }}
                  />
                </div>
                <h3>
                  <b>OUR BRAND</b>
                </h3>
                <p>
                  The first Suya Republick started out in the streets of Lagos,
                  Nigeria in 2018.
                </p>
                <h6 style={{ color: "#b7903c" }}>LEARN MORE</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app-section">
        <video className="videoTag" autoPlay loop muted style={{width:"100%", height: "100%"}}>
          <source src={brandVideo} type="video/mp4" />
        </video>
      </section>

      <section className="wallet-section">
        <div className="container">
          <div className="row row-grid">
            <div className="col-md-6 align-self-center">
              <h1>The lightest digital wallet you will ever own</h1>
              <br />
              <p>
                The GIGM digital wallet is a seamless way to pay for
                transactions within our ecosystem. Purchase bus tickets,
                airtime, data and pay for utility bills using the digital wallet
                available only on the mobile app.
              </p>
            </div>
            <div className="col-md-6">
              <img src={cards} alt="" className="img-fluid" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section className="ep-section">
        <div className="container">
          <div className="row row-grid">
            <div className="col-md-6">
              <div className="ep-apply">
                <h1>We do the heavy lifting </h1>
                <p>Earn easy with GIGM</p>

                <p>Become an enterprise partner today!</p>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <img src={ep} alt="" className="ep-apply-image" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeComponent;
