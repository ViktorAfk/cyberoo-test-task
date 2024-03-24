import styles from './Inssurance.module.scss';

export const Inssurance = ({ inssurance }) => {
  const { provider, policyNumber, coverage } = inssurance;

  return (
    <div>
      <h5 className={styles.inssurance__header}>inssurance</h5>

      <div className={styles.inssurance__item}>
        <p className={styles.inssurance__type}>provider:</p>
        <p className={styles.inssurance__information}>{ provider }</p>
      </div>

      <div className={styles.inssurance__item}>
        <p className={styles.inssurance__type}>policy number:</p>
        <p className={styles.inssurance__information}>{ policyNumber }</p>
      </div>
      
      <div className={styles.inssurance__item}>
            <p className={styles.inssurance__type}>coverage:</p>
            {!coverage || coverage.length === 0 
        ? (
          <p className={styles.inssurance__information}>There is no information about</p>
        ) : (
          <>
            <p className={styles.inssurance__information}>{ coverage.join(', ') }</p>
          </>
        )}
      </div>
    </div>
  )
}