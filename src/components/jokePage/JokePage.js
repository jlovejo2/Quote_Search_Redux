import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  loadDadJokes,
  loadChuckNorrisJokes,
  deleteJoke,
} from "../../redux/actions/jokesApiActions";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import Jumbotron from "../common/Jumbotron";
import QuoteCard from "../common/QuoteCard";
import { jokesApiArray } from "../../api/apiInfo";

const JokePage = ({
  loadDadJokes,
  loadChuckNorrisJokes,
  deleteJoke,
  jokes,
  loading,
}) => {
  const [errors, setErrors] = useState({});

  const handleSearchApi = async (event) => {
    const apiIndex = event.currentTarget.value;

    try {
      if (apiIndex === jokesApiArray[0].name) {
        console.log("first index");
        await loadDadJokes();
      } else if (apiIndex === jokesApiArray[1].name) {
        console.log("second index");
        await loadChuckNorrisJokes();
      }
    } catch {
      const newError = {};
      newError["jokesError"] = setErrors({ ...errors, newError });
    }
  };

  const handleDeleteJoke = (e) => {
    const jokeIndexToBeDeleted = e.currentTarget.value;
    console.log(jokeIndexToBeDeleted);

    try {
      deleteJoke(jokeIndexToBeDeleted);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autClose: false });
    }
  };

  const handleSaveJoke = (e) => {
    const jokeIndexToBeSaved = e.currentTarget.value;
    console.log(jokeIndexToBeSaved);
  };

  return (
    <Fragment>
      <Jumbotron
        headerOne={"Welcome to the jokes page"}
        descriptionOne={"Select the api you would like to search for a joke"}
      >
        {jokesApiArray.map((jokeApi, index) => {
          return (
            <div key={index} className="col">
              <button
                key={index}
                onClick={handleSearchApi}
                className={"btn btn-primary"}
                value={jokeApi.name}
              >
                <strong>{jokeApi.buttonHeader}</strong>
                <hr />
                {jokeApi.buttonText}
              </button>
            </div>
          );
        })}
      </Jumbotron>
      <div className="container">
        <div className="row">
          {loading ? (
            <Spinner />
          ) : (
            <QuoteCard
              quoteArray={jokes}
              deleteQuote={handleDeleteJoke}
              saveQuote={handleSaveJoke}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

JokePage.propTypes = {
  jokes: PropTypes.array.isRequired,
  loadDadJokes: PropTypes.func.isRequired,
  loadChuckNorrisJokes: PropTypes.func.isRequired,
  deleteJoke: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  console.log("mapStateToPRops state: ", state);
  return {
    jokes: state.jokes,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadDadJokes,
  loadChuckNorrisJokes,
  deleteJoke,
};

export default connect(mapStateToProps, mapDispatchToProps)(JokePage);
