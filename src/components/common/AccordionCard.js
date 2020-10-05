import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Accordion } from "react-bootstrap";
import AccordionAwareToggle from "./AccordionAwareToggle";

const AccordionCard = ({
  children,
  eventKey,
  headerText,
  currentEventKey,
  toggleEventKey,
}) => {
  return (
    <Fragment>
      <Card>
        <Card.Header>
          <AccordionAwareToggle
            eventKey={eventKey}
            currentEventKey={currentEventKey}
            toggleEventKey={toggleEventKey}
          >
            {headerText}
          </AccordionAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={eventKey}>{children}</Accordion.Collapse>
      </Card>
    </Fragment>
  );
};

AccordionCard.propTypes = {
  children: PropTypes.element.isRequired,
  eventKey: PropTypes.string.isRequired,
  currentEventKey: PropTypes.string.isRequired,
  toggleEventKey: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
};

export default AccordionCard;
