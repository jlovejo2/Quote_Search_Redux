import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  loadLikedQuotes,
  deleteQuote,
} from "../../redux/actions/likedQuotesActions";
import {
  loadLikedJokes,
  deleteLikedJoke,
} from "../../redux/actions/likedJokesActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import LikedQuotesList from "./LikedQuotesList";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const ProfilePage = ({
  likedQuotes,
  likedJokes,
  loadLikedQuotes,
  loadLikedJokes,
  loadAuthors,
  deleteQuote,
  deleteLikedJoke,
  loading,
}) => {
  useEffect(() => {
    loadLikedQuotes();
    loadLikedJokes();
    loadAuthors();
  }, []);

  // console.log("like quote data: ", likedQuotes);

  const handleDeleteQuote = async (quote) => {
    console.log("to delete quote id", quote.id);

    try {
      await deleteQuote(quote);
      await toast.success("Quote Deleted");
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autClose: false });
    }

    deleteQuote();
  };

  const handleDeleteJoke = async (joke) => {
    console.log("to delete joke id", joke.id);

    try {
      await deleteLikedJoke(joke);
      await toast.success("Joke Deleted");
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autClose: false });
    }
  };

  return (
    <Fragment>
      <div className="jumbotron">
        <h1>Profile Page</h1>
        <p>Find all your favorited stuff here</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go Home
        </Link>
      </div>
      <div className="row">
        {loading ? (
          <Spinner />
        ) : (
          // fragment tags avoid needless parent divs in the dom
          <Fragment>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              // onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add a quote
            </button>
            <LikedQuotesList
              likedQuotes={likedQuotes}
              onDeleteClick={handleDeleteQuote}
            />
            <LikedQuotesList
              likedQuotes={likedJokes}
              onDeleteClick={handleDeleteJoke}
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

ProfilePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  likedQuotes: PropTypes.array.isRequired,
  likedJokes: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadLikedQuotes: PropTypes.func.isRequired,
  loadLikedJokes: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  deleteQuote: PropTypes.func.isRequired,
  deleteLikedJoke: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

//redux mapping function that indicates what states we'd like access to
//mapStateToProps will run each time the redux store state changes
//ownProps is automatically populated by react, it gives us access to our components props
function mapStateToProps(state) {
  console.log("state: ", state);

  return {
    likedQuotes:
      state.authors.length === 0
        ? []
        : state.likedQuotes.map((likedQuote) => {
            console.log(typeof likedQuote.author);
            if (typeof likedQuote.author === "number") {
              return {
                ...likedQuote,
                author: state.authors.find((a) => a.id === likedQuote.author)
                  .name,
              };
            } else {
              return { ...likedQuote };
            }
          }),
    likedJokes: state.likedJokes,
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

//This is the bind action creators methods for dispatching the actions
//REdux mapping function that indicates what actions we'd like to handle
const mapDispatchToProps = {
  loadLikedQuotes,
  loadLikedJokes,
  loadAuthors,
  deleteQuote,
  deleteLikedJoke,
};

//the connect function returns a function and then that function immediately calls our component (ManageCoursePage)
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

//Code saved for later to render accordion divs based for the facts, quotes, or jokes

// <Accordion defaultActiveKey="">
// {quotesApiArray
//   ? quotesApiArray.map((quoteApiCardData, index) => {
//       return (
//         <Card key={index}>
//           <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
//             {quoteApiCardData.cardHeader}
//           </Accordion.Toggle>
//           <Accordion.Collapse eventKey={`${index}`}>
//             <div>
//               {index == 0 ? ronSwansonQuoteFragment : ""}
//               {index == 1 ? quoteGardenFragment : ""}
//               {index == 2 ? kanyeWestFragment : ""}
//               {index == 3 ? taylorSwiftFragment : ""}
//               {index == 4 ? donaldTrumpFragment : ""}
//             </div>
//           </Accordion.Collapse>
//         </Card>
//       );
//     })
//   : null}
// </Accordion>
