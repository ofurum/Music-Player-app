import React from "react";

import "./Loader.styles.scss";

const Loading = () => {
  return (
    <div className="loading">
      <span className="spinner">
        <i className="fas fa-circle-notch fa-4x"></i>
      </span>
    </div>
  );
};

export default Loading;
