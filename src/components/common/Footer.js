import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <div className="fixed-bottom footer-style">
      <div className="row align-items-center">
        <div className="d-flex col-5 justify-content-start">
          {props.childrenLeft}
        </div>
        <div className="d-flex col-2 justify-content-center p-2">
          <p>Copright&copy;</p>
        </div>
        <div className="d-flex col-5 justify-content-end">
          {props.childrenRight}
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  childrenLeft: PropTypes.string.isRequired,
  childrenRight: PropTypes.string.isRequired,
};

export default Footer;
