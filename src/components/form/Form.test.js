import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Form from './Form';

// should clear form on successful submission
// should show error message if not valid email
// disable submit button if any of the input fields are empty

describe('Form', () => {
    let component;
    beforeEach(() => {
        const mockStore = configureStore();
        const store = mockStore({ comments: [] });
        component = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
    });

    test('renders the form', () => {
        const nameInput = component.getByLabelText(/name/i);
        const emailInput = component.getByLabelText(/email/i);
        const commentInput = component.getByLabelText(/comment/i);
        const ratingInput = component.getByLabelText(/select rating/i);

        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(commentInput).toBeInTheDocument();
        expect(ratingInput).toBeInTheDocument();
    });

    test('enables submit button when all fields have input', () => {
        const submitButton = component.getByText('Submit');
        expect(submitButton).toBeDisabled();

        // fill in form
        const nameInput = component.getByLabelText(/name/i);
        fireEvent.change(nameInput, {target: {value: 'joe bloggs'}});

        const emailInput = component.getByLabelText(/email/i);
        fireEvent.change(emailInput, {target: {value: 'joe@bloggs.com'}});

        const commentInput = component.getByLabelText(/comment/i);
        fireEvent.change(commentInput, {target: {value: 'mock comment'}});

        const ratingInput = component.getByDisplayValue(2);
        fireEvent.click(ratingInput);

        expect(submitButton).not.toBeDisabled();
    });
});
