import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { coursesSelector, coursesIsLoadingSelector } from "./selectors";
import Spinner from "../spinner/Spinner";
import { getCourses } from "./actions";
import { ListItem, ListItemText, List, makeStyles } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  link: {
    color: "#333",
    textDecoration: "none"
  }
}));

const CoursesList = ({ courses, loading, getCourses }) => {
  const classes = useStyles();
  const { subject } = useParams();
  useEffect(() => {
    getCourses(subject);
  }, [getCourses, subject]);

  const coursesList = courses.map((course, key) => (
    <Link
      key={key}
      className={classes.link}
      to={`/subjects/${subject}/${course.course_id}`}
    >
      <ListItem button>
        <ListItemText>
          {course.subject} {course.catalog_number} {course.title}
        </ListItemText>
      </ListItem>
    </Link>
  ));

  return loading ? <Spinner /> : <List>{coursesList}</List>;
};

CoursesList.propTypes = {
  courses: PropTypes.array,
  loading: PropTypes.bool,

  getCourses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  courses: coursesSelector(state),
  loading: coursesIsLoadingSelector(state)
});

const mapDispatchToProps = {
  getCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList);
