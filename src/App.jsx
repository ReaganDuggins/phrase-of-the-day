import { useState } from 'react';
import './App.css';
import Phrases from './assets/phrases.json' assert { type: 'json' };

function App() {
  const [curLanguage, setCurLanguage] = useState("Hebrew")

  const showPhrase = () => {
    const data = Phrases[0];
    console.log(Object.keys(data[curLanguage]));

    return (
      <section>
        <section>
          <label>English: </label>
          <span>{data.English}</span>
        </section>
        {
          data[curLanguage].map((langKind) => {
            return (
              <section>
                <section>
                  <label>{curLanguage} {langKind.Kind}: </label>
                  <span>{langKind.Native}</span>
                </section>
                <section>
                  <label>Pronunciation: </label>
                  <span>{langKind.Pronunciation}</span>
                </section>
              </section>
            );
          })
        }
        
        
      </section>
    )
  }

  return (
    <>
      
        <h1>Phrase of the Day</h1>
        <select onChange={(e) => {setCurLanguage(e.target.value)}}>
          <option value="Hebrew">Hebrew</option>
          <option value="Old Norse">Old Norse</option>
          <option value="Old English">Old English</option>
        </select>

        <section>
          <h2>{curLanguage}</h2>
          {showPhrase()}
        </section>
    </>
  )
}

export default App
