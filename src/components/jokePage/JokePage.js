import React, { Fragment, useEffect } from "react";
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

const JokePage = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <h1>Joke Page</h1>
        <p>Search for jokes here</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go Home
        </Link>
      </div>
      <div className="row"></div>
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
