import { Button, Card, CardActions, CardContent, Typography, Box } from '@mui/material';
import React from 'react';

const TodoContent = ({ todo }) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        width: '100%', // Ensure all cards have the same width
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',  // Ensure card stretches to full height of the container
      }}
    >
      <CardContent>
        <Typography variant="h5" color={'text.secondary'}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: '#000000',
            color: '#fff',
            opacity: '0.6',
            '&:hover': {
              backgroundColor: '#000000',
              color: '#fff',
              opacity: '0.9',
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};


export default TodoContent;