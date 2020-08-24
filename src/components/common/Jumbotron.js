import React from "react";

const Jumbotron = ({ headerOne, descriptionOne }) => {
  <div className="jumbotron">
    <div className="row">
      <h1>{headerOne}</h1>
      <p>{descriptionOne}</p>
      <hr className="my-4"></hr>
    </div>
    <div className="row">
      <p>button tabs</p>
    </div>
  </div>;
};

export default Jumbotron;
