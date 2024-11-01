import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';

/*
function GameBoard(props) {
  return (
    <div className="App">
      <h1>{props.secretWord}</h1>
    </div>
  );
}
*/
/*
function GameBoard(secretWord) {
  return (
    <div className="App">
      <h1>{secretWord}</h1>
    </div>
  );
}
*/

const GameBoard = ( {secretWord, maxError, answerLength} )=>{ // 매개변수
  const [guessedLetters,setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  let clickHandler = (value)=>{
    let val = value.toLowerCase(); // 소문자 변환 함수
    /*
    복사본 생성
    복사본 값 추가
    기존배열 → 복사본 변경
    */

    /* 첫번째 방법
    const guess = [...guessedLetters];
    guess.push(val);
    setGuessedLetters(guess);
    */

    // 두번째 방법
    setGuessedLetters(prev=>[...prev,val]);
    /*
      틀리면 errorCount를 1씩 증가
    */
    if(secretWord.indexOf(value) === -1){
      setErrorCount(errorCount+1)
    }
  }

  let reset = ()=>{
    setErrorCount(0);
    setGuessedLetters([]);
    let buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(item=>item.classList.remove('hidden'));
  }

  return (
    <>
    {
    errorCount<maxError ?
    <div className={secretWord ? '' : 'hidden'}>
      <span className="error">횟수 : {errorCount} / {maxError}</span>
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters} answerLength={answerLength} complete={reset}/>
      {/* { errorCount<maxError ? <ButtonGrid onclick={clickHandler}/> : null } */}
      <ButtonGrid onclick={clickHandler}/>
    </div>
    :
    <button className={secretWord ? '' : 'hidden'} onClick={reset}>Retry</button>
    }
    </>
  );
}

export default GameBoard;