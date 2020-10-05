import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Accordion } from "react-bootstrap";
// import AccordionAwareToggle from "./AccordionAwareToggle";

const AccordionCard = ({
  children,
  eventKey,
  headerText,
  contextToggle,
  childrenToggle,
  // AccordionAwareToggle,
  // currentEventKey,
  // toggleEventKey,
}) => {
  return (
    <Fragment>
      <Card>
        {contextToggle ? (
          <Card.Header style={{ backgroundColor: "rgba(0,0,255,.75)" }}>
            {childrenToggle}
          </Card.Header>
        ) : (
          <Accordion.Toggle as={Card.Header} event={eventKey}>
            {headerText}
          </Accordion.Toggle>
        )}
        <Accordion.Collapse eventKey={eventKey}>{children}</Accordion.Collapse>
      </Card>
    </Fragment>
  );
};

AccordionCard.propTypes = {
  children: PropTypes.element.isRequired,
  childrenToggle: PropTypes.element.isRequired,
  contextToggle: PropTypes.bool.isRequired,
  eventKey: PropTypes.string.isRequired,
  currentEventKey: PropTypes.string.isRequired,
  toggleEventKey: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
  AccordionAwareToggle: PropTypes.element.isRequired,
};

export default AccordionCard;
