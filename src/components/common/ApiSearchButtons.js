import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import { Card, Accordion } from "react-bootstrap";

const ApiSearchButtons = ({ buttonsArray, handleSearchApi }) => {
  return (
    <Fragment>
      {buttonsArray.map((apiInfo, index) => {
        return (
          <div key={index} className="col">
            <button
              key={index}
              onClick={handleSearchApi}
              className={"btn btn-primary api-search_button"}
              value={apiInfo.name}
            >
              <p>
                <strong>{apiInfo.buttonHeader}</strong>
              </p>
            </button>
          </div>
        );
      })}
    </Fragment>
  );
};

ApiSearchButtons.propTypes = {
  buttonsArray: PropTypes.array.isRequired,
  handleSearchApi: PropTypes.func.isRequired,
};

export default ApiSearchButtons;
