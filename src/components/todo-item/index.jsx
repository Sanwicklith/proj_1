import React from 'react'
import TodoContent from '../todo-content'
import { Box } from '@mui/material';

const TodoItem = ({todo}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'space-around' // Align cards evenly across the container
      }}
    >
      
        <Box sx={{ width: '100%', boxSizing: 'border-box' }}>
          <TodoContent todo={todo} />
      </Box>
    </Box>
  );
};

export default TodoItem