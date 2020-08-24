import React from "react";

const Jumbotron = ({ headerOne, descriptionOne, buttonText, children }) => {
  return (
    <div className="jumbotron">
      <div className="row">
        <h1>{headerOne}</h1>
        <p>{descriptionOne}</p>
        <hr className="my-4"></hr>
      </div>
      <div className="row">
        <p>{buttonText ? buttonText : ""}</p>
      </div>
      {children}
    </div>
  );
};

export default Jumbotron;
