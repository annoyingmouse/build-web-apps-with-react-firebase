import styles from "./EventList.module.scss"

export default function EventList({events, handleClick}) {
  return events.map((event, index) => (
    <div className={styles.card}
         key={event.id}>
      <h3>{index} - {event.title}</h3>
      <button onClick={() => handleClick(event.id)}>Delete event</button>
    </div>
  ))
}
