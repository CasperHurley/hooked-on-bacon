import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [numberOfParagraphs, updateNumberOfParagraphs] = useState(1);
  const [bacon, setBacon] = useState([]);

  useEffect(() => {
    axios(`https://baconipsum.com/api/?type=all-meat&paras=${numberOfParagraphs}`).then(response => {
      setBacon(response.data);
    })
  }, [numberOfParagraphs]);

  const handleChange = (e) => {
    updateNumberOfParagraphs(e.target.value);
  }

  return (
    <div className="App">
      <label for="updateNumOfPar">How much bacon would you like today?</label>
      <br />
      <input id="updateNumOfPar" style={{width: '4em', padding: '5px'}} type="number" value={numberOfParagraphs} min="0" onChange={handleChange} />
      {numberOfParagraphs >= 10 && <h3>That's a lot of bacon. Ron Swanson would approve. Merica.</h3>}
      {
        bacon.map((paragraph, index) => {
          return (
            <p key={index}>{paragraph}</p>
          )
        })
      }
    </div>
  );
}

export default App;
