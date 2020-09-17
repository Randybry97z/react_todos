import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //When the app loads, need to listen to the db and fetch new todos as they get added/removed
  //useEffect runs when the App.js loads
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [input])

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
          <InputLabel>✅ Write a Todo</InputLabel>
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
