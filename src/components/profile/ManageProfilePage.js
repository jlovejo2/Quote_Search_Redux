import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Spinner from '../common/Spinner';
import CourseForm from '../courses/CourseForm';
// import { propTypes } from 'react-bootstrap/esm/Image';


export function ManageProfilePage({
    authors,
    ...props
}) {

    const [ newJokeOrQuote, setNewJokeOrQuote ] = useState({...props.newJokeOrQuote})

function handleChange(event) {
 
    console.log(event)
    }

function handleSave(event) {
 console.log(event)
}

    return authors.length === 0 || newJokeOrQuote.length === 0 ? (
        <Spinner />
      ) : (
        <CourseForm
          course={newJokeOrQuote}
        //   errors={errors}
          authors={authors}
          onChange={handleChange}
          onSave={handleSave}
        //   saving={saving}
        />
      );
}

ManageProfilePage.propTypes = {
    authors: PropTypes.array.isRequired,
    newJokeOrQuote: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        authors: state.authors,
        likedJokes: state.likedJokes,
        likedQuotes: state.likedQuotes,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfilePage);