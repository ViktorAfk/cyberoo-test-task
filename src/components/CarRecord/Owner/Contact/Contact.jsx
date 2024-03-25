import styles from './Contact.module.scss';

export const Contact = ({ contact }) => {
  const { phone, email } = contact; 
  return (
    <div>
      <h5 className={styles.contact__header}>contact</h5>

      <div className={styles.contact__item}>
        <p className={styles.contact__type}>phone:</p>
        <a className={styles.contact__information} href={`tel:${ phone }`}>{ phone }</a>
      </div>

      <div className={styles.contact__item}>
      <p className={styles.contact__type}>email:</p>
      <a className={styles.contact__information} href={`mailto:${ email }`}>{ email }</a>
      </div>
    </div>
  )
}