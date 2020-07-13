import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

// whet the apps loads, we need to listen to the database and fetch new todos as they got added/removed
  useEffect(() => {
    // this code here.. fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
    })
  }, []);

    

  const addTodo = (event) => {
    //adds todos
    event.preventDefault();  //stop refresh

    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); //clear input
  }

  return (
    <div className="App">
      <h1>Set Your Daily Targets!</h1>
      <form>
        <FormControl>
          <InputLabel>Write a To Do</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>  

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add To Do
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
