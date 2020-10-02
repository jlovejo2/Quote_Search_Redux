import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Accordion } from "react-bootstrap";

const AccordionCard = ({ children, eventKey, headerText }) => {
  return (
    <Fragment>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
          {headerText}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={eventKey}>{children}</Accordion.Collapse>
      </Card>
    </Fragment>
  );
};

AccordionCard.propTypes = {
  children: PropTypes.element.isRequired,
  eventKey: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
};

export default AccordionCard;
