import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  loadRonSwansonQuotes,
  loadTaylorSwiftQuotes,
  loadRandQuoteGardenQuote,
  loadKanyeWestQuotes,
  loadDonaldTrumpQuotes,
  deleteQuote,
} from "../redux/actions/quotesApiActions";
import {
  favoriteQuote,
  loadLikedQuotes,
} from "../redux/actions/likedQuotesActions";
import { connect } from "react-redux";
import Jumbotron from "../components/common/Jumbotron";
import Spinner from "../components/common/Spinner";
import QuoteCard from "./common/QuoteCard";
// import { toast } from "react-toastify";
// import { Accordion, Card } from "react-bootstrap";
import { quotesApiArray } from "../api/apiInfo";
import ApiSearchButtons from "./common/ApiSearchButtons";

export function SearchQuotes({
  quotes,
  loadLikedQuotes,
  loadRonSwansonQuotes,
  loadRandQuoteGardenQuote,
  loadKanyeWestQuotes,
  loadTaylorSwiftQuotes,
  loadDonaldTrumpQuotes,
  deleteQuote,
  favoriteQuote,
  loading,
  // history,
  // ...props
}) {
  const [errors, setErrors] = useState({});
  // const [saving, setSaving] = useState(false);

  useEffect(() => {
    console.log("entered useEffect....");
    loadLikedQuotes();
  }, []);

  const handleSearchApi = async (event) => {
    console.log("searching...");
    const apiIndex = event.currentTarget.value;
    try {
      if (apiIndex === quotesApiArray[0].name) {
        await loadRonSwansonQuotes();
      } else if (apiIndex === quotesApiArray[1].name) {
        console.log(quotesApiArray[1].name);
        await loadRandQuoteGardenQuote();
      } else if (apiIndex === quotesApiArray[2].name) {
        await loadKanyeWestQuotes();
      } else if (apiIndex === quotesApiArray[3].name) {
        await loadTaylorSwiftQuotes();
      } else if (apiIndex === quotesApiArray[4].name) {
        await loadDonaldTrumpQuotes();
      }
    } catch (error) {
      const newError = {};
      newError["ronSwansonApiError"] = setErrors({ ...errors, newError });
    }
  };

  const handleDeleteQuote = (e) => {
    const quoteIndexToBeDeleted = parseInt(e.currentTarget.value);

    try {
      deleteQuote(quoteIndexToBeDeleted);
    } catch (error) {
      const newError = {};
      newError["deleteQuoteError"] = setErrors({ ...errors, newError });
    }
  };

  const handleSaveQuote = (e) => {
    const quoteIndexToBeSaved = parseInt(e.currentTarget.value);

    console.log(typeof quoteIndexToBeSaved);
    const qouteToSave = quotes.filter((quote, index) => {
      console.log(typeof quoteIndexToBeSaved, typeof index);
      if (quoteIndexToBeSaved === index) {
        return true;
      } else {
        return false;
      }
    });

    console.log("quote to save: ", qouteToSave);

    favoriteQuote(qouteToSave[0]);
  };

  const RonSwansErrorMessages = errors.ronSwansonApiError ? (
    <div className="alert alert-danger" role="alert">
      <strong>Yikes!</strong>&nbsp;{errors.ronSwansonApiError}
    </div>
  ) : null;

  return (
    <>
      {RonSwansErrorMessages}
      <Jumbotron
        headerOne={"Welcome to the quote search page!"}
        descriptionOne={
          "Select the api that you would like to search for quotes from"
        }
      >
        <ApiSearchButtons
          buttonsArray={quotesApiArray}
          handleSearchApi={handleSearchApi}
        />
      </Jumbotron>
      <div className="container">
        <div className="row">
          {/* <Accordion defaultActiveKey=""> */}
          {loading ? (
            <Spinner />
          ) : (
            <QuoteCard
              quoteArray={quotes}
              deleteQuote={handleDeleteQuote}
              saveQuote={handleSaveQuote}
            />
          )}
        </div>
      </div>
    </>
  );
}

SearchQuotes.propTypes = {
  quotes: PropTypes.array.isRequired,
  loadLikedQuotes: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loadRonSwansonQuotes: PropTypes.func.isRequired,
  loadRandQuoteGardenQuote: PropTypes.func.isRequired,
  loadKanyeWestQuotes: PropTypes.func.isRequired,
  loadTaylorSwiftQuotes: PropTypes.func.isRequired,
  loadDonaldTrumpQuotes: PropTypes.func.isRequired,
  deleteQuote: PropTypes.func.isRequired,
  favoriteQuote: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  console.log("Entered MapStateToProps: ", state);

  return {
    quotes: state.quotes.length === 0 ? [] : state.quotes,
    likedQuotes: state.likedQuotes,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadLikedQuotes,
  loadRonSwansonQuotes,
  loadRandQuoteGardenQuote,
  loadKanyeWestQuotes,
  loadTaylorSwiftQuotes,
  loadDonaldTrumpQuotes,
  deleteQuote,
  favoriteQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchQuotes);
