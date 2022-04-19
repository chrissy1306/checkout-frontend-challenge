
function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        payload: comment,
    }
}

export default addComment;