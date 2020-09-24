import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const quoteUnorderList = ({ quoteArray, deleteQuote }) => {
  return (
    <Fragment>
      {quoteArray.length > 0
        ? quoteArray.map((value, index) => {
            return (
              <div className="col" key={index}>
                <Card className="quote-card_main-body">
                  <Card.Img
                    variant="top"
                    src={value.image ? `${value.image}` : "#"}
                    alt={`${value.author}`}
                    rounded
                  ></Card.Img>
                  <Card.Body>
                    <p>{`"${value.quote}"`}</p>
                    <footer>
                      <div className="row justify-space-between">
                        <div className="col">{`-${value.author}`}</div>
                        <div className="col text-center">
                          <button
                            className="quote-UL_icon-button"
                            onClick={deleteQuote}
                            data-quotenum={index}
                          >
                            <FontAwesomeIcon
                              icon={faThumbsUp}
                              data-quotenum={index}
                            />
                          </button>
                          <button
                            className="quote-UL_icon-button"
                            onClick={deleteQuote}
                            data-quotenum={index}
                          >
                            <FontAwesomeIcon
                              icon={faThumbsDown}
                              data-quotenum={index}
                            />
                          </button>
                        </div>
                      </div>
                    </footer>
                  </Card.Body>
                </Card>
              </div>
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
