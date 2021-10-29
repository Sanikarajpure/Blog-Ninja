import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./loginPage.css";
import Header from "../../Header";
import { default as BgIMG } from "../../images/bg_img.svg";
import { useHistory } from "react-router";
import { set_User } from "../../actions/LoginActions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.Login.user.isAuth);
  const EmailDefault = "sanika.rajpure@gmail.com";
  const PasswordDefault = "sanika2102";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ emailErr: "", passwordErr: "" });

  useEffect(() => {
    if (isAuth) {
      history.push("/blog");
    }
  }, [history, isAuth]);

  const checkEmail = (val) => {
    setUser((prev) => {
      return { ...prev, email: val };
    });
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (val.length > 8) {
      if (regex.test(val.toString().toLowerCase())) {
        setError((prev) => {
          return { ...prev, emailErr: "" };
        });
        setUser((prev) => {
          return { ...prev, email: val };
        });
      } else {
        setError((prev) => {
          return { ...prev, emailErr: "*Enter Valid Email" };
        });
      }
    }
  };

  const validate = () => {
    if (user.email === EmailDefault) {
      setError((prev) => {
        return { ...prev, emailErr: "" };
      });
    } else {
      setError((prev) => {
        return { ...prev, emailErr: "*Incorrect Email" };
      });
      dispatch(
        set_User({
          email: "",
          firstName: "",
          lastName: "",
          city: "",
          isAuth: false,
        })
      );
    }

    if (error.emailErr === "") {
      if (user.password === PasswordDefault) {
        dispatch(
          set_User({
            email: "sanika.rajpure@gmail.com",
            firstName: "Sanika",
            lastName: "Rajpure",
            city: "Pune",
            isAuth: true,
          })
        );
        history.push("/blog");
      } else {
        setError((prev) => {
          return { ...prev, passwordErr: "*Incorrect Password" };
        });

        dispatch(
          set_User({
            email: "",
            firstName: "",
            lastName: "",
            city: "",
            isAuth: false,
          })
        );
      }
    }
  };

  return (
    <div className="loginPageWrapper">
      <Header />
      <div className="LoginContainer">
        <div className="loginLSection">
          <img src={BgIMG} className="loginBGImg" alt="into img" />
          <div className="textonimage">Get Blogging!</div>
        </div>
        <div className="loginRSection">
          <div>
            <div className="loginHeader"> Login</div>

            <div className="loginForm">
              <div className="loginInputContainer">
                <input
                  className={`loginInput ${error ? "error" : ""}`}
                  type="text"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => {
                    checkEmail(e.target.value);
                  }}
                ></input>
                <div className="errorLabel">
                  {error.emailErr ? error.emailErr : ""}{" "}
                </div>
              </div>
              <div className="loginInputContainer">
                <input
                  className={`loginInput ${error ? "error" : ""}`}
                  type="password"
                  value={user.password}
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, password: e.target.value };
                    });
                  }}
                  placeholder="Password"
                ></input>
                <div className="errorLabel">
                  {error.passwordErr ? error.passwordErr : ""}{" "}
                </div>
              </div>
              <div
                className="LoginBtn"
                onClick={() => {
                  validate();
                }}
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
