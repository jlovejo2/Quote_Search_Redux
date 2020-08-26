import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const quoteUnorderList = ({ quoteArray }) => {
  return (
    <ul className={"list-group"}>
      {quoteArray.length > 0 ? (
        quoteArray.map((value, index) => {
          return (
            <li className={"list-item p-2"} key={index}>
              <Card>
                <Card.Header>header</Card.Header>
                <Card.Body>
                  <p>{`"${value.quote}"`}</p>
                  <footer>
                    {`-${value.author}`} <FontAwesomeIcon icon={faThumbsUp} />{" "}
                  </footer>
                </Card.Body>
              </Card>
            </li>
          );
        })
      ) : (
        <li> No quotes yet. </li>
      )}
    </ul>
  );
};

quoteUnorderList.propTypes = {
  quoteArray: PropTypes.array.isRequired,
};

export default quoteUnorderList;
