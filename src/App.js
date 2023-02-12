import './assets/style/App.scss';
import { useState } from 'react';
import { Title } from './components/Title/Title';
import { Modal } from './components/Modal/Modal';
import { EventList } from './components/EventList/EventList';
import { NewEventForm } from './components/NewEventForm/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([])

  const addEvent = event => {
    setEvents(prevEvents => [...prevEvents, event])
    setShowModal(false)
  }

  const handleClick = id => setEvents((prevEvents) => prevEvents.filter(event => event.id !== id))

  const subtitle = "All the latest events in Mario Kingdom"

  return (
    <div className="app">
      <Title title="Events in your area"
             subtitle={subtitle}/>
      <div>
        <button type="button"
                onClick={() => setShowEvents(!showEvents)}>{showEvents ? 'Hide' : 'Show'} events</button>
      </div>
      {showEvents && (
        <EventList events={events}
                   handleClick={handleClick}/>
      )}
      {showModal && (
        <Modal isSalesModal={false}>
          <NewEventForm addEvent={addEvent}/>
        </Modal>
      )}
      <div>
        <button type="button"
                onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>  
  );
}

export default App;
