import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { loadRonSwansonQuotes } from "../redux/actions/ronSwansonApiActions";
import { connect } from "react-redux";
import Jumbotron from "../components/common/Jumbotron";
import Spinner from "../components/common/Spinner";
import { toast } from "react-toastify";
import { Accordion, Card } from "react-bootstrap";

export function SearchQuotes({
  quotes,
  loadRonSwansonQuotes,
  ronSwanson,
  loading,
  history,
  ...props
}) {
  // const [ronSwansonQuotes, setRonSwansonQuotes] = useState([]);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const handleSearchApi = async () => {
    console.log("searching...");
    try {
      await loadRonSwansonQuotes();

      // setRonSwansonQuotes(...ronSwansonQuotes);
      console.log(quotes);
      console.log(ronSwanson);
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
                {value}
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
        <div className="col">
          <button onClick={handleSearchApi} className={"btn btn-primary"}>
            <h4>Needing some Inspiration from the Great Ron Swanson?</h4>
            click here
          </button>
        </div>
        <div className="col">
          <button onClick={handleSearchApi} className={"btn btn-primary"}>
            <h4>{"Can't think of what kind of quote you want?"}</h4>
            Try something random!
          </button>
        </div>
        <div className="col">
          <button onClick={handleSearchApi} className={"btn btn-primary"}>
            <h4>Looking for quotes from a movie?</h4>
            Let her rip!
          </button>
        </div>
      </Jumbotron>
      <div className="container">
        <div className="row">
          <Accordion defaultActiveKey="">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Ron Freaking Swanson
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                {ronSwansonQuoteFragment}
              </Accordion.Collapse>
            </Card>
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
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  console.log("Entered MapStateToProps: ", state);
  console.log(ownProps);

  return {
    ronSwanson: state.ronSwanson.length === 0 ? [] : state.ronSwanson,
    quotes: [],
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadRonSwansonQuotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchQuotes);
