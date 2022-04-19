function updateRatings(newRating, ratings) {
    return ratings.map((rating) => rating.rating === newRating ? {...rating, count: rating.count + 1}: rating);
}

function comments(state=[], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return {
                comments: [action.payload, ...state.comments],
                ratings: updateRatings(action.payload.rating, state.ratings)
            }
        default:
            return state;
    }
}

export default comments;