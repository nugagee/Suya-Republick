import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../assets/img/Layer x0020 1.png";
import arrowup from "../../assets/img/arrow-up-small-footer.svg";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import isoLogo from "../../assets/img/iso-logo.png";
import twitter from "../../assets/img/twitter.svg";
import "./index.css";

export const Footer = () => {
  const history = useHistory();

  return (
    <div>
      {/* <section className="subscribe-section">
        <div className="container">
          <div className="bg-sub">
            <div className="row row-grid">
              <div className="col-md-7">
                <h1>
                  New routes, latest travel news and product update? Be the first to hear about it.
                </h1>
              </div>
              <div className="bg-sub-button col-md-5">
                <InputField
                  type="text"
                  placeholder="Enter email"
                  onChangeMethod={() => {}}
                />
                <br />
                <br />
                <Button
                className="home-button"
                  text="Subscribe"
                  handleButtonClick={() => {}}
                  type="button"
                  btnstyle={{
                    background: "#E21D00",
                    color: "white",
                    width: "30%",
                    height: "40px",
                    borderRadius:"10px",
                    border:"none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <footer className="last-section pt-5 pb-5">
        <div className="container">
          <div className="footer-logo pb-5">
            <Link to="/">
              <img src={logo} alt="gigm logo" />
            </Link>
          </div>
          <div className="footer-cards">
            <div className="footer-card footer-logo-mobile">
              <Link to="/">
                <img src={logo} alt="gigm logo" />
              </Link>
            </div>
            <div className="footer-card mb-5">
              <h1>Company</h1>
              <Link to="/About-Us">
                <p>About Us</p>
              </Link>
              <Link to="/About-Us/#our-team">
                <p>Team</p>
              </Link>

              {/* <Link to="/luggage">
                <p>Luggage Allowance</p>
              </Link> */}
              {/* <Link to="/"><p>Become an Ambassador</p></Link>
              <Link to="/"><p>Become a captain</p></Link> */}
            </div>
            <div className="footer-card mb-5">
              <h1>Experience</h1>
              <Link to="/Contact-Us">
                <p>Contact Us</p>
              </Link>
              <Link to="/Faq">
                <p>FAQs</p>
              </Link>
              {/* <Link to="/travels">
                <p>Travels &amp; Tours</p>
              </Link> */}
              {/* <Link to="/awards">
                <p>Awards</p>
              </Link> */}
              <Link to="/Bus-Terminal">
                <p>Find a Terminal</p>
              </Link>
              <a
                // target="_blank"
                rel="noreferrer"
                href="https://blog.gigm.com/"
              >
                <p>Blog</p>
              </a>
            </div>
            <div className="footer-card">
              <h1>Terms</h1>
              <Link to="/Privacy-Policy">
                <p>Privacy Policy</p>
              </Link>
              <Link to="/Terms-and-Conditions">
                <p>Terms &amp; Conditions</p>
              </Link>
              {/* <Link to="/safety">
                <p>Safety</p>
              </Link> */}
            </div>
            <div className="footer-card">
              <div className="socialfootericon">
                <h1>Connect With Us</h1>
                <div className="footer-img">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/GIGMobility?s=09"
                  >
                    {" "}
                    <img src={twitter} alt="" width="20" height="20" />{" "}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/GIGMobility"
                  >
                    <img src={facebook} alt="" width="20" height="20" />{" "}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://instagram.com/gigmobility?utm_medium=copy_link"
                  >
                    {" "}
                    <img src={instagram} alt="" width="20" height="20" />{" "}
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#56ccf24a",
                    borderRadius: "4px",
                    width: "170px",
                    padding: "5px 10px",
                    margin: "25px auto",
                    cursor: "pointer",
                  }}
                  onClick={() => history.push("/iso")}
                >
                  <span>Licensed by</span>
                  <img
                    src={isoLogo}
                    width="20"
                    height="20"
                    alt=""
                    className="ml-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h6>GIG Mobility</h6>
            </div>
            <div className="col-md-2 offset-2">
              <a href="#top">
                <div className="footer-block-square">
                  <img src={arrowup} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
