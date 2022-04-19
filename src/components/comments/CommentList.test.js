import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CommentList from './CommentList';

const mockComments = [{
    headline: "lorem ipsum",
    summary: "the comment summary",
    name: "foobar",
    rating: 4,
},
{
    headline: "headline2",
    summary: "the comment summary2",
    name: "joe bloggs",
    rating: 2,
}];

describe('Comment List', () => {
    let component;
    beforeEach(() => {
        const mockStore = configureStore();
        const store = mockStore({ comments: mockComments });
        component = render(
            <Provider store={store}>
                <CommentList comments={mockComments} />
            </Provider>
        );
    });

    test('renders the count of comments in the headline', () => {
        const linkElement = component.getByText(`${mockComments.length} Comments`);
        expect(linkElement).toBeInTheDocument();
    });
    
    test('renders the comments', () => {
        expect(component.queryAllByTestId('comment').length).toEqual(mockComments.length);
    });
});