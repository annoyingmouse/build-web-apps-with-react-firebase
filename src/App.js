import './assets/style/App.scss';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('mario')

  const handleClick = () => {
    setName(name === 'mario' ? 'luigi': 'mario')
    console.log(name) // This will log the previous state
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>  
  );
}

export default App;
