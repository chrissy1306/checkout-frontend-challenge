import { Container, Typography }  from '@mui/material';

import './App.css';
import Form from './components/form/Form';
import Chart from './components/chart/Chart';
import CommentList from './components/comments/CommentList';

function App() {
  return (
    <Container className='App'>
      <Typography component="h1" variant="h4" gutterBottom>Customer Feedback</Typography>
      <div className='Row'>
        <Form />
        <Chart />
      </div>
      <CommentList />
    </Container>
  );
}

export default App;
