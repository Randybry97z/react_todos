import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();//stop the refresh
    setTodos([...todos, input]);
    setInput(''); //clear input after save
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
