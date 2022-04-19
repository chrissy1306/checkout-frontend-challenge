import { render, screen } from '@testing-library/react';
import Comment from './Comment';

const mockComment = {
    headline: "lorem ipsum",
    summary: "the comment summary",
    name: "foobar",
    rating: 4,
};

describe('Comment', () => {
    test('renders summary of comment', () => {
        render(<Comment {...mockComment} />);
        const linkElement = screen.getByText(mockComment.summary);
        expect(linkElement).toBeInTheDocument();
    });
    
    test('renders name of comment', () => {
        render(<Comment {...mockComment} />);
        const linkElement = screen.getByText(mockComment.name);
        expect(linkElement).toBeInTheDocument();
    });
    
    test('renders ratings of comment', () => {
        render(<Comment {...mockComment} />);
        const linkElement = screen.getByLabelText(`${mockComment.rating} Stars`);
        expect(linkElement).toBeInTheDocument();
    });
});

