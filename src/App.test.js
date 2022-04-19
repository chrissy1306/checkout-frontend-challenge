import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

describe('App', () => {
  const initialState = { comments: [] };
  const mockStore = configureStore();
  let store;

  test('renders title', () => {
    store = mockStore(initialState);

    render(<Provider store={store}>
      <App />
    </Provider>);
    const linkElement = screen.getByText(/Customer Feedback/i);
    expect(linkElement).toBeInTheDocument();
  });
})
