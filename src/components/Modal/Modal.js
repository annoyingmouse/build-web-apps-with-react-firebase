import styles from './Modal.module.scss'
import ReactDOM from 'react-dom'

export default function Modal({children, handleClose, isSalesModal}) {
  return ReactDOM.createPortal((
    <div className={styles.background}>
      <div className={styles.modal} 
            style={{
              border: '4px solid',
              borderColor: isSalesModal ? '#ff4500' : '#555',
              textAlign: 'center',
            }}>
        {children}
        <button type="button"
                onClick={handleClose}
                className={isSalesModal ? styles.sales : ''}>Close</button>
      </div>
    </div>
  ), document.body)
}
