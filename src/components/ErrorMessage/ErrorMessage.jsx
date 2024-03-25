import styles from './ErrorMessage.module.scss';


export const ErrorMessage = () => (
  <div className={styles.error}>
    <h3 className={styles.error__message}>Oops, something went wrong!</h3>
  </div>
)