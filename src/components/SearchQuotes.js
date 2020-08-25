import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { loadRonSwansonQuotes } from "../redux/actions/ronSwansonApiActions";
import { loadRandQuoteGardenQuote } from "../redux/actions/quoteGardenApiActions";
import { connect } from "react-redux";
import Jumbotron from "../components/common/Jumbotron";
import Spinner from "../components/common/Spinner";
import { toast } from "react-toastify";
import { Accordion, Card } from "react-bootstrap";
import { quotesApiArray } from "../api/apiInfo";

export function SearchQuotes({
  quotes,
  loadRonSwansonQuotes,
  loadRandQuoteGardenQuote,
  ronSwanson,
  quoteGarden,
  loading,
  history,
  ...props
}) {
  // const [ronSwansonQuotes, setRonSwansonQuotes] = useState([]);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const handleSearchApi = async (event) => {
    console.log(event.target.dataset);
    console.log("searching...");
    const apiIndex = event.target.dataset.apiname;
    try {
      if (apiIndex === quotesApiArray[0].name) {
        await loadRonSwansonQuotes();
      } else if (apiIndex === quotesApiArray[1].name) {
        console.log(quotesApiArray[1].name);
        await loadRandQuoteGardenQuote();
      } else if (apiIndex === quotesApiArray[2].name) {
        console.log(quotesApiArray[2].name);
      }
      // setRonSwansonQuotes(...ronSwansonQuotes);
      console.log(quotes);
      console.log(ronSwanson);
      console.log(quoteGarden);
    } catch (error) {
      const newError = {};
      newError["ronSwansonApiError"] = setErrors({ ...errors, newError });
    }
    // .then(() => {
    //   console.log(quotes);
    // })
    // .catch((error) => {
    //   alert("Loading Ron Swanson Quotes failed" + error);
    // });
    // setRonSwansonQuotes({ ...ronSwansonQuotes, one: quotes });
  };

  const RonSwansErrorMessages = errors.ronSwansonApiError ? (
    <div className="alert alert-danger" role="alert">
      <strong>Yikes!</strong>&nbsp;{errors.ronSwansonApiError}
    </div>
  ) : null;

  const ronSwansonQuoteFragment = loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <ul className={"list-group"}>
        {ronSwanson.length > 0 ? (
          ronSwanson.map((value, index) => {
            return (
              <li className={"list-item p-2"} key={index}>
                {`"${value.quote}"  -${value.author}`}
              </li>
            );
          })
        ) : (
          <li> No quotes yet. </li>
        )}
      </ul>
    </Fragment>
  );

  return (
    <>
      {RonSwansErrorMessages}
      <Jumbotron
        headerOne={"Welcome to the quote search page!"}
        descriptionOne={
          "Select the api that you would like to search for quotes from"
        }
      >
        {quotesApiArray
          ? quotesApiArray.map((quoteApi, index) => {
              return (
                <div key={index} className="col">
                  <button
                    key={index}
                    onClick={handleSearchApi}
                    className={"btn btn-primary"}
                    data-apiname={quoteApi.name}
                  >
                    <strong>{quoteApi.buttonHeader}</strong>
                    <hr />
                    {quoteApi.buttonText}
                  </button>
                </div>
              );
            })
          : null}
      </Jumbotron>
      <div className="container">
        <div className="row">
          <Accordion defaultActiveKey="">
            {quotesApiArray
              ? quotesApiArray.map((quoteApiCardData, index) => {
                  return (
                    <Card key={index}>
                      <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
                        {quoteApiCardData.cardHeader}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={`${index}`}>
                        <div>
                          {index == 0
                            ? ronSwansonQuoteFragment
                            : "nothing coded yet"}
                        </div>
                      </Accordion.Collapse>
                    </Card>
                  );
                })
              : null}
          </Accordion>
        </div>
      </div>
    </>
  );
}

SearchQuotes.propTypes = {
  quotes: PropTypes.array.isRequired,
  ronSwanson: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  loadRonSwansonQuotes: PropTypes.func.isRequired,
  loadRandQuoteGardenQuote: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  console.log("Entered MapStateToProps: ", state);
  console.log(ownProps);

  return {
    ronSwanson: state.ronSwanson.length === 0 ? [] : state.ronSwanson,
    quoteGarden: state.quoteGarden.length === 0 ? [] : state.quoteGarden,
    quotes: [],
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadRonSwansonQuotes,
  loadRandQuoteGardenQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchQuotes);
