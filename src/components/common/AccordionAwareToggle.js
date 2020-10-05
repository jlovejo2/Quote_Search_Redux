import React, { useState, useContext, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Accordion,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";

const AccordionAwareToggle = ({
  children,
  eventKey,
  callBack,
  // toggleEventKey,
  // currentEventKey,
}) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = () => {
    //   if (currentEventKey === eventKey) {
    //     toggleEventKey("");
    //   } else {
    //     toggleEventKey(eventKey);
    //   }
    // };

    useAccordionToggle(eventKey, () => callBack && callBack(eventKey));
  };

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? "pink" : "purple" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

AccordionAwareToggle.propTypes = {
  children: PropTypes.element.isRequired,
  eventKey: PropTypes.string.isRequired,
  toggleEventKey: PropTypes.func.isRequired,
  currentEventKey: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};

export default AccordionAwareToggle;
