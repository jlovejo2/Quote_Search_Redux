import React from "react";

const Jumbotron = ({ headerOne, descriptionOne, children }) => {
  return (
    <div className="jumbotron">
      <div className="row">
        <h1>{headerOne}</h1>
        <p>{descriptionOne}</p>
        <hr className="my-4"></hr>
      </div>
      <div className="row">{children}</div>
    </div>
  );
};

export default Jumbotron;
