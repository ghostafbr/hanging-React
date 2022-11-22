import './App.css';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import { useEffect, useState } from 'react';
import { getRandomWord } from './helpers/getRandomWord';

function App() {

  const [word, setWord] = useState(getRandomWord().toUpperCase());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttemps] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);

  // determine if player lost
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  // determine if player won
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    console.log('currentHiddenWord', currentHiddenWord);
    if (currentHiddenWord === word) {
      setWin(true);
    }
  }, [hiddenWord]);


  const checkLetter = (letter: string) => {

    if (lose) { return; }

    if (!word.includes(letter)) {
      console.log('No esta');

      setAttemps(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');
    console.log(hiddenWordArray);

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));

  }

  const newGame = () => {
    const newWord = getRandomWord().toUpperCase();
    setWord(newWord);
    setAttemps(0);
    setLose(false);
    setWin(false);
    setHiddenWord('_ '.repeat(word.length));
  }

  return (
    <div className="App">

      {/* Images */}
      <HangImage imageNumber={attempts} />

      {/* Hidden word */}
      <h3>{hiddenWord}</h3>

      {/* Attems Counter */}
      <h3> <b>Attempts: {attempts}</b> </h3>

      {/* Lost Message */}
      {
        (lose) ? <h3> You lose! - {word}</h3> : ''
      }

      {/* Win Message */}
      {
        (win) ? <h3> You win! </h3> : ''
      }

      {/* Letters Buttons */}
      {
        letters.map((letter) => {
          return <button onClick={() => checkLetter(letter)} key={letter}> {letter} </button>
        })
      }

      <br></br>

      <button onClick={() => newGame()}> New Game </button>

    </div>
  );
}

export default App
