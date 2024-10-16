import React from "react";
// import CookieConsent from "react-cookie-consent";
// import TagManager from 'react-gtm-module';
import "./assets/css/App.css";
import AllPages from "./routes/routes";


// const tagManagerArgs = {
//   gtmId: "GTM-NCBTVTL",
// };

// TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <>
      <AllPages />
      {/* <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="gigmCookies"
        style={{
          background: "#ffffff",
          color: "black",
          minHeight: "100px",
          // width: "60%",
          display: "flex",
          alignItems: "center",
        }}
        buttonStyle={{
          background: "#007bff",
          color: "white",
          fontSize: "13px",
          fontWeight: "bold",
          marginTop: "10px 40px",
          borderRadius: "5px",
          padding: "5px 15px",
          width: "250px",
        }}
        declineButtonStyle={{
          background: "red",
          color: "white",
          fontSize: "13px",
          fontWeight: "bold",
          marginTop: "10px",
          borderRadius: "5px",
          padding: "5px 15px",
        }}
        expires={150}
        buttonClasses="btn btn-primary"
        containerClasses="alert alert-warning col-lg-12 text-center"
        flipButtons
        overlay
      >
        We Use Your Data to Give You the Best Experience on Our Website" and "By
        Continuing Without Changing Your Cookie Settings, We Assume You Agree to
        Our{" "}
        <span>
          <a style={{ color: "#007bff" }} href="/Terms-and-Conditions">
            Terms and Conditions.
          </a>
        </span>
        <br />
      </CookieConsent> */}
    </>
  );
}

export default App;
