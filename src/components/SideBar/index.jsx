import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { getUser } from "../../../services/auth";
import "./index.css";

const SideBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // if (userInfo === null) {
    //   return false;
    // } else {
    //   setUser(userInfo);
    // }
    // eslint-disable-next-line
  }, []);

  // const userInfo = getUser();
  return (
    <div className="side-bar">
      <ul className="sidebar-list">
        {/* {user !== null && ( */}
          <>
            <li>
              <NavLink to="/dashboard" exact={true} activeClassName="active">
                <div className="profile-sidebar">Periperi Grilled Chicken</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" exact={true} activeClassName="active">
                <div className="profile-sidebar">Seafood Special</div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/bookinghistory"
                exact={true}
                activeClassName="active"
              >
                <div className="profile-sidebar">Grilled Fish</div>
              </NavLink>
            </li>
      
          </>
        {/* )} */}

        <li>
          <NavLink to="/support" exact={true} activeClassName="active">
            <div className="profile-sidebar">Lagos Shawarma &amp; Burgers</div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/setting" exact={true} activeClassName="active">
            <div className="profile-sidebar">Pepper Soup</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting" exact={true} activeClassName="active">
            <div className="profile-sidebar">Extras</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting" exact={true} activeClassName="active">
            <div className="profile-sidebar">Sides</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting" exact={true} activeClassName="active">
            <div className="profile-sidebar">Special Offer</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting" exact={true} activeClassName="active">
            <div className="profile-sidebar">Suya</div>
          </NavLink>
        </li>
      </ul>
    </div>
    // <div className="container">
    // </div>
  );
};

export default SideBar;
