import React, { useState } from "react";
import PropTypes from "prop-types";
import { loadRonSwansonQuotes } from "../redux/actions/ronSwansonApiActions";
import { connect } from "react-redux";

export function SearchQuotes({
  quotes,
  loadRonSwansonQuotes,
  history,
  ...props
}) {
  const [ronSwansonQuotes, setRonSwansonQuotes] = useState({ ...props.quotes });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const handleSearchApi = async () => {
    console.log("searching...");
    try {
      await loadRonSwansonQuotes();

      console.log(quotes);
      console.log(ronSwansonQuotes);
    } catch (error) {
      console.log("Error with ron swanson quotes: ", error);
    }
    // .then(() => {
    //   console.log(quotes);
    // })
    // .catch((error) => {
    //   alert("Loading Ron Swanson Quotes failed" + error);
    // });
    // setRonSwansonQuotes({ ...ronSwansonQuotes, one: quotes });
  };

  return (
    <>
      <h1>Select the api that you would like to search for quotes from</h1>
      <button onClick={handleSearchApi} className={"btn btn-primary"}>
        Click to search
      </button>
      <ul>
        {quotes.length > 0
          ? quotes.map((value, index) => {
              <li key={index}> {value}</li>;
            })
          : "No quotes yet"}
      </ul>
    </>
  );
}

SearchQuotes.propTypes = {
  quotes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loadRonSwansonQuotes: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  console.log("Entered MapStateToProps: ", state);
  console.log(ownProps);

  return {
    quotes: state.ronSwanson,
  };
}

const mapDispatchToProps = {
  loadRonSwansonQuotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchQuotes);
