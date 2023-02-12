import styles from './NewEventForm.module.scss'

export const NewEventForm = () => {
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.value)
  }
  
  return (
    <form className={styles.form}>
      <label>
        <span>Event Title:</span>
        <input type="text" onChange={handleChange}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date"/>
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

