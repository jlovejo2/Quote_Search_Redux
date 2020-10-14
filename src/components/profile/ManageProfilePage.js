import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Spinner from '../common/Spinner';
import CourseForm from '../courses/CourseForm';


export function ManageProfilePage({
    authors,
    newJokeOrQuote,
}) {

    return authors.length === 0 || newJokeOrQuote.length === 0 ? (
        <Spinner />
      ) : (
        <CourseForm
          course={course}
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

function mapStateToProps() {
    return {
        authors,
        newJokeOrQuotes,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);