import { createStore } from 'redux';

import comments from './reducers/comments';
import prepopulatedComments from './data/comments';
import prepopulatedRatings from './data/ratings';
// create object from the default data to make it look bit more interesting
const defaultState = {
    comments: prepopulatedComments,
    ratings: prepopulatedRatings,
};

const store = createStore(comments, defaultState);

export default store;