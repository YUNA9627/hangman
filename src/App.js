import React, { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import SetWord from './SetWord';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [maxError, setMaxError] = useState(0);
  const [answerLength, setAnswerLength] = useState(0)
  const [secretWord, setSecretWord] = useState(()=>{
    let word = window.localStorage.getItem('scretWord');
    word && word.length > 0 ? setAnswerLength(word.length):setAnswerLength(0);
    word && word.length > 0 ? setMaxError(word.length + 2):setMaxError(1);
    return word || ''
  });

  // if(secretWord.length > 0){
  //   setMaxError(secretWord.length +2)
  // }else {
  // setMaxError(1);
  // }

  return (
    <div className="App">
      <h1>Hangman
      <span>😵</span>
      </h1>
      <p className="game">Do you want to play Game?</p>
      <Routes>
        <Route path="/" element={<GameBoard secretWord={secretWord} maxError={maxError} answerLength={answerLength}/>} />
        <Route path="/admin" element={<SetWord />} />
      </Routes> 
    </div>
  );
}

export default App;