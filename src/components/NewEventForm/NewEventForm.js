import styles from './NewEventForm.module.scss'
import { useState } from 'react'

export const NewEventForm = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  return (
    <form className={styles.form}>
      <label>
        <span>Event Title:</span>
        <input type="text"
               value={title}
               onChange={e => setTitle(e.target.value)}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date"
               value={date}
               onChange={e => setDate(e.target.value)}/>
      </label>
      <button type="submit">
        Submit
      </button>
      <p>title - {title}, date - {date}</p>
      <p onClick={resetForm}>Reset the form</p>
    </form>
  )
}

