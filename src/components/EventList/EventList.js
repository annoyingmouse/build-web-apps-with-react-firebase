import styles from "./EventList.module.scss"

export const EventList = ({ events, handleClick }) => events.map((event, index) => (
  <div className={styles.card}
       key={event.id}>
    <h3>{index} - {event.title}</h3>
    <p>{event.location} - {event.date}</p>
    <button onClick={() => handleClick(event.id)}>Delete event</button>
  </div>
))
