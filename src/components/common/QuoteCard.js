import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const quoteUnorderList = ({ quoteArray }) => {
  return (
    <Fragment>
      {quoteArray.length > 0
        ? quoteArray.map((value, index) => {
            return (
              <Card key={index}>
                <Card.Img
                  variant="top"
                  src={value.image ? `${value.image}` : "#"}
                  alt={`${value.author}`}
                ></Card.Img>
                <Card.Body>
                  <p>{`"${value.quote}"`}</p>
                  <footer>
                    <div className="row justify-space-between">
                      <div className="col">{`-${value.author}`}</div>
                      <div className="col text-center">
                        <button className="quote-UL_icon-button">
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                        <button className="quote-UL_icon-button">
                          <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                      </div>
                    </div>
                  </footer>
                </Card.Body>
              </Card>
            );
          })
        : null}
    </Fragment>
  );
};

quoteUnorderList.propTypes = {
  quoteArray: PropTypes.array.isRequired,
};

export default quoteUnorderList;
