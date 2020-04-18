/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );
const makeSelectRepos = () =>
  createSelector(
    selectHome,
    homeState => homeState.userData,
  );


export { selectHome, makeSelectLoading,makeSelectError,makeSelectRepos };