import styles from './NewEventForm.module.scss'
import { useState } from 'react'

export const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('huddersfield')

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('huddersfield')
  }

  const handleSubmit = e => {
    e.preventDefault()
    const event = { 
      title,
      date,
      location,
      id: Math.floor(Math.random() * 10000) + 1
    }
    addEvent(event)
    resetForm()
  }

  return (
    <form className={styles.form}
          onSubmit={handleSubmit}>
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
      <label>
        <span>Event Location:</span>
        <select value={location}
                onChange={e => setLocation(e.target.value)}>
          <option value="huddersfield">Huddersfield</option>
          <option value="cambridge">Cambridge</option>
          <option value="ely">Ely</option>
        </select>
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

