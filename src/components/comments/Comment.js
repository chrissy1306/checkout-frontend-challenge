import { Box, Card, CardContent, ListItem, Rating, Typography } from '@mui/material';

function Comment({ summary, name, rating }) {
    return (
      <ListItem data-testid="comment">
          <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography  variant="h5" gutterBottom>
                        {name}
                    </Typography>
                    <Box pb={2}>
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>
                    <Typography variant="body2">{summary}</Typography>
                </CardContent>   
          </Card>

      </ListItem>
    );
}
  
  export default Comment;