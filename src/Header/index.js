import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./index.css";
import { logout_user } from "../actions/LoginActions";


const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [dropDown, setDropDown] = useState(false);
  const isAuth = useSelector((state) => state.Login.user.isAuth);

  return (
    <>
      <div className="headerWrapper">
        <div className="logoContainer">
          <h3 className="logoText">
            Blog &nbsp; <b>N I N J A</b>
          </h3>
        </div>
        {isAuth ? (
          <div className="nameDisplay">
            <div className="displayPicture"></div>
            <div className="userName">sanika</div>
            <div
             
              className="dropDownIcon"
              onClick={() => {
                setDropDown((prev) => !prev);
              }}
            >
              {dropDown ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
            </div>
          </div>
        ) : null}
      </div>
      {dropDown ? (
        <div className="HeaderDropDown">
          <div
            className="dropDownOption1"
            onClick={() => {
              setDropDown(false);
              dispatch(
                logout_user({
                  email: "",
                  firstName: "",
                  lastName: "",
                  city: "",
                  isAuth: false,
                })
              );
              history.push("/");
            }}
          >
            Log-out
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
