import React from "react";
import Blog from "./components/blog";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Blog />
      </div>
    </div>
  );
};
export default Home;
