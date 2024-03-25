import styles from './Adress.module.scss';

export const Adress = ({ userAddress }) => {
const { 
  street, 
  city, 
  state, 
  zipCode,
} = userAddress;

  return (
    <address>
      <h5 className={styles.address__header}>address</h5>
      <div className={styles.address__item}>
        <p className={styles.address__type}>street:</p>
        <p className={styles.address__information}>{ street }</p>
      </div>

      <div className={styles.address__item}>
        <p className={styles.address__type}>city:</p>
        <p className={styles.address__information}>{ city }</p>
      </div>

      <div className={styles.address__item}>
        <p className={styles.address__type}>state:</p>
        <p className={styles.address__information}>{ state }</p>
      </div>

      <div className={styles.address__item}>
        <p className={styles.address__type}>zip code:</p>
        <p className={styles.address__information}>{zipCode}</p>
      </div>
    </address>
  )
}