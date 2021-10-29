import React from "react";

import "./blogListElement.css";

const BlogListElement = ({ title, content }) => {
  return (
    <div className="listItemwrapper">
      <div className="listItemContainer">
        <div className="lisItemDetails">
          <h1 className="listItemTitle">{title}</h1>
          <p className="listItemSummary">{content}</p>
        </div>
        <div className="listItemIdentifier">
          <div className="listItemFirstLetter">
            <i className="listItemtext"> {title.slice(0, 1).toUpperCase()}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListElement;
