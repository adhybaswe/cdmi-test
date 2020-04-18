import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectCurrentUser } from 'containers/App/selectors';

function ChartActiveUser(props) {
  console.log('props',props)
  // console.log('loading',loading);
  // console.log('error',error);
  // console.log('repos',repos);
  if (props.loading) {
    console.log('loading',loading);
    return (<div></div>);
  }

  if (props.error !== false) {
    console.log('error',error);
    return (<div></div>);
  }

  if (props.repos !== false) {
    console.log('repo',repos);
    return (<div></div>);
  }

  return null;
}

ChartActiveUser.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(ChartActiveUser);