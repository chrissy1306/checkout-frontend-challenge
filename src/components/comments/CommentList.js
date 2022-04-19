import { List, Typography } from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Comment from './Comment';

function getCommentHeader(count) {
    return `${count} Comment${count !== 1 ? 's' : ''}`;
}

function CommentList() {
    const comments = useSelector(state => state.comments);
    return (
        <Fragment>
            <Typography component="h2" variant="h5" gutterBottom>{getCommentHeader(comments.length)}</Typography>
            <List>
                {comments.map((comment, index) => <Comment key={index} {...comment} />)}
            </List>
        </Fragment>
    )
}

export default CommentList;