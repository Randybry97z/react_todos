import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import db from './firebase';

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="It's time to work 🔥" />
      </ListItem>
      <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
    </List>
  )
}

export default Todo