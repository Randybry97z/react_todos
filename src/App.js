import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();//stop the refresh
    setTodos([...todos, input]);

  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
