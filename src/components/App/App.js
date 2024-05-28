import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { getTricks } from '../apiCalls'
import Tricks  from '../Tricks'



function App() {
  const [tricks, setTricks] = useState([])
  useEffect(() => {
    getTricks()
    .then(data => setTricks(data))
  }, [])
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App; 


// I need to get all the tricks from the api and display them
// I need to have an api calls file
// I need to have a component for all cards disply 
// I need to have a component for the sigle card
// I need to have state in the app component for all the tricks
// this needs to passed down to the cards display via props
// I need to have useEffect to only load the ricks once