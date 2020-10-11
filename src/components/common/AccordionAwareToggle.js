import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AccordionContext, useAccordionToggle } from "react-bootstrap";

function AccordionAwareToggle({ children, eventKey, callBack }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callBack && callBack(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className="profile-page__accordion-button button-text-style"
      style={{
        backgroundColor: isCurrentEventKey
          ? "rgba(255,20,147)"
          : "rgba(128,0,128)",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

AccordionAwareToggle.propTypes = {
  children: PropTypes.element.isRequired,
  callBack: PropTypes.func.isRequired,
  eventKey: PropTypes.string.isRequired,
  currentEventKey: PropTypes.string.isRequired,
};

export default AccordionAwareToggle;
