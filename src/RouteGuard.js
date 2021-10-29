import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const RouteGuard = (ComposedComponent) => {
  const AuthenticationCheck = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const user = useSelector((state) => state.Login.user.isAuth);
    useEffect(() => {
      if (user) {
        setIsAuth(true);
      } else {
        props.history.push("/");
      }
    }, [props, user]);

    if (!isAuth) {
      return <div>loading</div>;
    } else {
      return <ComposedComponent authorized={isAuth} />;
    }
  };
  return AuthenticationCheck;
};
export default RouteGuard;
