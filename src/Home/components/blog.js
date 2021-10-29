import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./blog.css";
import { set_Blog } from "../../actions/HomePageActions";

import BlogListElement from "./blogListElement";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const blogArray = useSelector((state) => state.Home.blog);

  const dispatch = useDispatch();
  const SaveBlog = () => {
    if (blog.title === "" && blog.content === "") {
    } else {
      dispatch(set_Blog(blog));
    }
  };
  return (
    <div className="blogWrapper">
      <div className="blogLSection">
        <div className="blogContainer">
          <h1> Compose your Blog</h1>
          <div className="blogDetails">
            <div className="blogTitle">
              <div className="TitleLabel">Title</div>
              <input
                className="blogDetailsInput"
                placeholder="A catchy One"
                type="text"
                value={blog.title ? blog.title : null}
                onChange={(e) => {
                  setBlog((prev) => {
                    return { ...prev, title: e.target.value };
                  });
                }}
              ></input>
            </div>
            <div className="blogContent">
              <div className="TitleLabel">Blog Content</div>
              <textarea
                className="blogDetailsContentInput"
                placeholder="Spill the deets here!"
                value={blog.content ? blog.content : ""}
                onChange={(e) => {
                  setBlog((prev) => {
                    return { ...prev, content: e.target.value };
                  });
                }}
              ></textarea>
            </div>

            <div
              className="SaveBtn"
              onClick={() => {
                SaveBlog();
              }}
            >
              Plublish!
            </div>
          </div>
        </div>
      </div>
      <div className="blogRSection">
        {blogArray
          .map((element) => (
            <BlogListElement
              title={element.data.title}
              content={element.data.content}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Blog;
