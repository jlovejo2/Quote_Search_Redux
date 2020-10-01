import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//omitting return keyword with arrow function here
const LikedQuotesList = ({ likedQuotes, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {likedQuotes.map((quote, index) => {
        return (
          <tr key={index}>
            <td>{quote.title}</td>
            <td>{quote.author}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  onDeleteClick(quote);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

LikedQuotesList.propTypes = {
  likedQuotes: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default LikedQuotesList;
