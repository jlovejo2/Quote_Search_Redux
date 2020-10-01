import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  loadLikedQuotes,
  deleteQuote,
} from "../../redux/actions/likedQuotesActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import Jumbotron from "../common/Jumbotron";
import { jokesApiArray } from "../api/apiInfo";

const JokePage = () => {
  const [errors, setErrors] = useState({});

  const handleSearchApi = async (event) => {
    const apiIndex = event.currentTarget.value;

    try {
      if (apiIndex === jokesApiArray[0].name) {
        console.log("first index");
      } else if (apiIndex === jokesApiArray[1].name) {
        console.log("second index");
      }
    } catch {
      const newError = {};
      newError["jokesError"] = setErrors({ ...errors, newError });
    }
  };

  return (
    <Fragment>
      <Jumbotron
        headerOne={"Welcome to the jokes page"}
        descriptionOne={"Select the api you would like to search for a joke"}
      >
        {jokesApiArray.map((quoteApi, index) => {
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
        })}
      </Jumbotron>
      <div className="container">
        <div className="row"></div>
      </div>
    </Fragment>
  );
};

JokePage.PropTypes = {
  testState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  console.log("mapStateToPRops state: ", state);
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(JokePage);
