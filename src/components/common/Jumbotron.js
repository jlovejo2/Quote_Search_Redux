import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ headerOne, descriptionOne, children }) => {
  return (
    <div className="jumbotron">
      <div className="row align-items-start">
        <div className="col-12">
          <h1>{headerOne}</h1>
        </div>
        <div className="col-12">
          <p>{descriptionOne}</p>
        </div>
        <hr className="my-4"></hr>
      </div>
      <div className="row">{children}</div>
    </div>
  );
};

Jumbotron.propTypes = {
  headerOne: PropTypes.string.isRequired,
  descriptionOne: PropTypes.string.isRequired,
  children: PropTypes.array,
};

export default Jumbotron;
