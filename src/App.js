import './assets/style/App.scss';
import { useState } from 'react';

function App() {
  const [showEvents, setShowEvents] = useState(true);
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

  const handleClick = id => setEvents((prevEvents) => prevEvents.filter(event => event.id !== id))

  return (
    <div className="App">
      <h2>Upcoming events</h2>
      <div>
        <button type="button"
                onClick={() => setShowEvents(false)}>Hide events</button>
      </div>
      <div>
        <button type="button"
                onClick={() => setShowEvents(true)}>Show events</button>
      </div>
      {events.map((event, index) => (
        <div key={event.id}>
          <h3>{index} - {event.title}</h3>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>  
  );
}

export default App;
