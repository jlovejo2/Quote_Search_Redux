import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { loadLikedQuotes } from "../../redux/actions/likedQuotesActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import courseReducer from "../../redux/reducers/courseReducer";

const ProfilePage = ({ likedQuotes, loadLikedQuotes, loadAuthors }) => {
  useEffect(() => {
    loadLikedQuotes();
    loadAuthors();
  }, []);

  console.log("like quote data: ", likedQuotes);

  return (
    <div className="jumbotron">
      <h1>Profile Page</h1>
      <p>Find all your favorited stuff here</p>
      <Link to="/" className="btn btn-primary btn-lg">
        Go Home
      </Link>
    </div>
  );
};

ProfilePage.propTypes = {
  likedQuotes: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadLikedQuotes: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

//redux mapping function that indicates what states we'd like access to
//mapStateToProps will run each time the redux store state changes
//ownProps is automatically populated by react, it gives us access to our components props
function mapStateToProps(state, ownProps) {
  console.log("state: ", state);

  return {
    likedQuotes:
      state.authors.length === 0
        ? []
        : state.likedQuotes.map((likedQuote) => {
            console.log(
              "find result",
              state.authors.find((a) => a.id === likedQuote.author).name
            );
            return {
              ...likedQuote,
              authorName: state.authors.find((a) => a.id === likedQuote.author)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

//This is the bind action creators methods for dispatching the actions
//REdux mapping function that indicates what actions we'd like to handle
const mapDispatchToProps = {
  loadLikedQuotes,
  loadAuthors,
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
