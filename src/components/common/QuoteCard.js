import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const quoteUnorderList = ({ quoteArray, deleteQuote, saveQuote }) => {
  return (
    <Fragment>
      {quoteArray.length > 0
        ? quoteArray.map((value, index) => {
            return (
              <div className="col" key={index}>
                {console.log("index of quote: ", index)}
                <Card className="quote-card_main-body">
                  <Card.Img
                    variant="top"
                    src={value.image ? `${value.image}` : "#"}
                    alt={`${value.author}`}
                    rounded="true"
                  ></Card.Img>
                  <Card.Body>
                    <p>{`"${value.title}"`}</p>
                    <footer>
                      <div className="row justify-space-between">
                        <div className="col">{`-${value.author}`}</div>
                        <div className="col text-center">
                          <button
                            className="quote-UL_icon-button"
                            onClick={saveQuote}
                            value={index}
                            // data-quotenum={index}
                          >
                            <FontAwesomeIcon
                              className="quote-UL_icon"
                              icon={faThumbsUp}
                              data-quotenum={index}
                            />
                          </button>
                          <button
                            className="quote-UL_icon-button"
                            onClick={deleteQuote}
                            value={index}
                            // data-quotenum={index}
                          >
                            <FontAwesomeIcon
                              className="quote-UL_icon"
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
  deleteQuote: PropTypes.func.isRequired,
  saveQuote: PropTypes.func.isRequired,
};

export default quoteUnorderList;
