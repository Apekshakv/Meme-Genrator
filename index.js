import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import memesData from './memesData';

export default function Meme() {
  const [memeImage, setMemeImage] = useState('');
  const [kpop, setKpop] = useState('');
  const [inputValue, setInputValue] = useState('');

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function npop(event) {
    setKpop(event.target.value);
  }

  return (
    <div className='cc'>
      <nav id='Nav'>
        <img src="./troll-face.png" alt="Troll Face" />
        <h2>MEME GENERATOR</h2>
      </nav>
      <form className='form'>
        <input
          className='appl'
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder='Top-Text'
        />
        <input
          type="text"
          value={kpop}
          onChange={npop}
          className='apple'
          placeholder='Bottom-Text'
        />
        <button className='btn' onClick={getMemeImage}>CLICK TO GET NEW IMAGE</button>
        <div className='nope'>
          <nav className='soap'>
            <h2 className="bottom">{inputValue}</h2>
            <img className="teo" src={memeImage} alt='YOUR MEME WILL APPER HERE' />
            <h2 className='top'>{kpop}</h2>
          </nav>
        </div>
      </form>
    </div>
  );
}

ReactDOM.render(<Meme />, document.getElementById('root'));








