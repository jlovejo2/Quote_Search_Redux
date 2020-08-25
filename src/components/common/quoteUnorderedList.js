import React from "react";
import PropTypes from "prop-types";

const quoteUnorderList = ({ quoteArray }) => {
  return (
    <ul className={"list-group"}>
      {quoteArray.length > 0 ? (
        quoteArray.map((value, index) => {
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
  );
};

quoteUnorderList.propTypes = {
  quoteArray: PropTypes.array.isRequired,
};

export default quoteUnorderList;
