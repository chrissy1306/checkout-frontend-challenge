import { Typography, Button, TextField, FormControlLabel, Rating } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Form.css';
import addComment from '../../actions/actionCreators';

function Form() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [email, setEmail] =  useState('');

    const dispatch = useDispatch()

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handleRatingChange = (event, newRating) => {
        setRating(newRating)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const enabled = name.length > 0 && comment.length > 0 && rating !== 0 && email.length > 0;

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addComment({
            name,
            summary: comment,
            email,
            rating
        }));

        resetForm();
    }

    const resetForm = () => {
        setName('');
        setComment('');
        setRating(0);
        setEmail('');
    }

    return (
        <div className="FormContainer">
            <Typography component="h2" variant="h5" gutterBottom>Leave review</Typography>

            <form className="Form" onSubmit={handleSubmit}>
                <TextField
                    id="name-input"
                    label="name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                    required
                    className='InputField'
                    inputProps={{'aria-label': 'name'}}
                />
                <TextField
                    id="email-input"
                    label="email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    type="email"
                    className='InputField'
                    inputProps={{'aria-label': 'email'}}
                />
                <FormControlLabel
                    className='InputField'
                    label="select rating"
                    labelPlacement="top"
                    control={
                        <>
                        <input
                            name="rating"
                            type="number"
                            value={rating}
                            hidden
                            readOnly
                            
                        />
                        <Rating
                            name="rating"
                            value={rating}
                            precision={1}
                            onChange={handleRatingChange}
                        />
                        </>
                    }
                    
                    />
                <TextField
                    id="comment-textfield"
                    label="comment"
                    value={comment}
                    onChange={handleCommentChange}
                    fullWidth
                    required
                    aria-required
                    className='InputField'
                    multiline
                    rows={4}
                    inputProps={{'aria-label': 'comment'}}
                />
                <Button
                    variant="contained"
                    disabled={!enabled}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Form;