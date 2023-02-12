import styles from './NewEventForm.module.scss'
import { useRef } from 'react'

export const NewEventForm = ({ addEvent }) => {
  const title = useRef()
  const date = useRef()

  const resetForm = () => {
    title.current.value = ''
    date.current.value = ''
  }

  const handleSubmit = e => {
    e.preventDefault()
    const event = {
      title: title.current.value,
      date: date.current.value,
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
               ref={title}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date"
               ref={date}/>
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

