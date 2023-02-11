import './assets/style/App.scss';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('mario')
  const [events, setEvents] = useState([
    {
      title: "Mario's birthday bash",
      id: 1
    },{
      title: "Bowser's live stream",
      id: 2
    },{
      title: "Race on Moo Moo Farm",
      id: 3
    }
  ])

  const handleClick = () => {
    setName(name === 'mario' ? 'luigi': 'mario')
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      <h2>Upcoming events</h2>
      {events.map((event, index) => (
        <div key={event.id}>
          <h3>{index + 1} - {event.title}</h3>
        </div>
      ))}
    </div>  
  );
}

export default App;
