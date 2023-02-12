import './assets/style/App.scss';
import { useState } from 'react';
import Title from './components/Title/Title';
import Modal from './components/Modal/Modal';
import EventList from './components/EventList/EventList';

function App() {
  const [showModal, setShowModal] = useState(false);
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

  const handleClose = () => setShowModal(false)

  const subtitle = "All the latest events in Mario Kingdom"

  return (
    <div className="app">
      <Title title="Events in your area"
             subtitle={subtitle}/>
      <div>
        <button type="button"
                onClick={() => setShowModal(true)}>Open Modal</button>
      </div>
      <div>
        <button type="button"
                onClick={() => setShowEvents(!showEvents)}>{showEvents ? 'Hide' : 'Show'} events</button>
      </div>
      {showEvents && (<EventList events={events}
                                 handleClick={handleClick}/>)}
      {showModal && (<Modal handleClose={handleClose}>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout</p>
      </Modal>)}
      
    </div>  
  );
}

export default App;
