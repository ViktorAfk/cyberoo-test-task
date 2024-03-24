import styles from './Features.module.scss';

export const Features = ({features}) => {
  return (
    
    <div className={styles.features}>
     <p className={styles.features__type}>features</p>
      {!features || features.length === 0 ? (
        <p className={styles.features__information}>There is no information</p>
        ) : (
          <>
            <p className={styles.features__information}>{features.join(', ')}</p>
          </>  
        )
      }
    </div>
  )
}