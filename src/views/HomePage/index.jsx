// import { addDays } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import Swal from "sweetalert2";
import imageTwo from "../../assets/img/abuja.webp";
import appline from "../../assets/img/appline.svg";
import appleBtn from "../../assets/img/appstore.webp";
import cards from "../../assets/img/card.webp";
import imageFive from "../../assets/img/edo.webp";
import googleBtn from "../../assets/img/google.webp";
import imageOne from "../../assets/img/lagos-ajah.webp";
import ep from "../../assets/img/man.webp";
import phoneBg from "../../assets/img/phonebg.webp";
import newTag from "../../assets/img/new-flight.png";
import updateImage from "../../assets/img/importantupdate.png";
import noticeImage from "../../assets/img/notice.jpeg";
import imageFour from "../../assets/img/portharcout-1.webp";
import imageThree from "../../assets/img/uselu.webp";
// import Navbar from "../../components/NavBar";
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
     
      {/* <Navbar /> */}
      <section className="hero-bg">
        <div className="container">
          <div className="hero-flex">
            <div className="left-card align-self-center">
              <h1>The modern way to commute across cities</h1>
              <br />
              <p>
                GIGM is an African technology powered company, providing
                seamless mobility services to commuters across Africa
              </p>
            </div>

            <div className="right-card">
              <section id="open-positions">
                <div className="positions">
                  <div className="position-filters">
                    <label
                      className={
                        toggleState === 1
                          ? "tabb-label active-tabs"
                          : "tabb-label"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      Book a seat
                    </label>
                    <label
                      className={
                        toggleState === 2
                          ? "tabb-label active-tabs"
                          : "tabb-label"
                      }
                      // onClick={() => {
                      //   Swal.fire({
                      //     showConfirmButton: false,
                      //     timer: 4000,
                      //     text: `This feature is unavailable at the moment, Please try again later!`,
                      //     icon: "error",
                      //   });
                      //   toggleTab(1);
                      // }}
                      onClick={() => toggleTab(2)}
                    >
                      Hire a bus
                    </label>
                    <label
                      className={
                        toggleState === 3
                          ? "tabb-label active-tabs"
                          : "tabb-label"
                      }
                      onClick={() => toggleTab(3)}
                    >
                      Booking status
                    </label>
                    <label
                      className={
                        toggleState === 4
                          ? "tabb-label active-tabs blink_me"
                          : "tabb-label blink_me"
                      }
                      onClick={() => {
                        toggleTab(4);
                        setVisibleTravelstart(true);
                        // alert("Flight feature coming soon...");
                      }}
                      style={{ position: "relative", color: "white" }}
                    >
                      <img
                        src={newTag}
                        alt="nw-tag"
                        width="35"
                        height="35"
                        // className="download-btn-btn"
                        loading="lazy"
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "30%",
                        }}
                      />
                      Book a flight
                    </label>
                  </div>

                  <div
                    className={
                      toggleState === 1
                        ? "position-group  active-content"
                        : "position-group"
                    }
                  >
                    <div className="position-post">
                    {/* <BookSeat  departureTerminal={departureTerminal}/> */}
                    </div>
                  </div>
                  <div
                    className={
                      toggleState === 2
                        ? "position-group  active-content"
                        : "position-group"
                    }
                  >
                    <div className="position-post">
                      {/* <HireBus /> */}
                    </div>
                  </div>

                  <div
                    className={
                      toggleState === 3
                        ? "position-group  active-content"
                        : "position-group"
                    }
                  >
                    <div className="position-post">
                      {/* <BookStatus /> */}
                    </div>
                    <div
                      className={
                        toggleState === 4
                          ? "position-group  active-content"
                          : "position-group"
                      }
                    >
                      <div className="position-post">
                        {/* <iframe                         title="A custom made iframe"
 src="https://www.youtube.com/embed/uXWycyeTeCs" width={1000} height={500} sandbox='allow-scripts allow-modal' loading='eager'></iframe> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      toggleState === 4
                        ? "position-group  active-content"
                        : "position-group"
                    }
                  >
                    <div className="position-post"></div>
                  </div>
                  {/* </div> */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="hot-trips pt-5 pb-5">
        <div className="container">
          <div className="row row-grid">
            <div className="col-md-5 align-self-center">
              <div className="prices-container">
                <h1>Best Trip Prices</h1>
                <p>Bringing you more routes at the best fares.</p>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      <section className="app-section">
        <div className="app-section-text">
          {/* <span>Introducing</span> */}
          <div className="">
            <h1>
              Enjoy the{" "}
              <span style={{ color: "red", background: "none" }}>
                GIGM Appvantage
              </span>
            </h1>
            <h1>Move Freely, Do Easily</h1>
            <p>
              It is all you need in one travel app. Book bus tickets, hire a
              vehicle and pay bills.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://onelink.to/j7k4zu"
            >
              {/* <Link to="https://play.google.com/store/apps/details?id=com.gigm"> */}{" "}
              <img
                src={googleBtn}
                alt=""
                className="download-btn-btn"
                loading="lazy"
              />
            </a>
            &nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://onelink.to/j7k4zu"
            >
              {/* <Link to="https://apps.apple.com/ng/app/gig-mobility/id1154045195"> */}
              <img
                src={appleBtn}
                alt=""
                className="download-btn-btn"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="app-section-image">
          <img
            src={phoneBg}
            alt=""
            className=""
            loading="lazy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-7">
          <img src={appline} alt="" className="appline" loading="lazy" />
        </div>
        {/* </div> */}
        {/* </div> */}
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


