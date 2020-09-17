import { List, ListItem, ListItemText } from '@material-ui/core';
import './Todo.css';
import React from 'react';

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={props.todo} secondary="It's time to work 🔥" />
      </ListItem>
    </List>
  )
}

export default Todo