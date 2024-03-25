import styles from './Battery.module.scss';

export const Battery = ({ battery }) => {
  const {
    capacity, 
    chargingTime, 
    warranty, 
    chargingStations,
  } = battery;

  return (
    <div>
      <h4 className={styles.battery__header}>battery</h4>

      <div className={styles.battery__item}>
        <p className={styles.battery__type}>capacity:</p>
        <p className={styles.battery__information}>{ capacity }</p>
      </div>

      <div className={styles.battery__item}>
        <p className={styles.battery__type}>charging time:</p>
        <p className={styles.battery__information}>{ chargingTime }</p>
      </div>

      <div>
        <h5 className={styles.battery__header}>warranty</h5>
        <div className={styles.battery__item}>
          <p className={styles.battery__type}>years:</p>
          <p className={styles.battery__information}>{ warranty.years }</p>
        </div>

        <div className={styles.battery__item}>
          <p className={styles.battery__type}>coverage:</p>
          <p className={styles.battery__information}>{ warranty.coverage }</p>
        </div>
      </div>

      <div>
        <h5 className={styles.battery__header}>charging stations:</h5>
        {!chargingStations || chargingStations.length === 0 ? (
           <p className={styles.battery__information}>There is no information</p>
        ) : (
          chargingStations.map(({ name, location }) => (
          <div key={ name }>
            <div className={styles.battery__item}>
              <p className={styles.battery__type}>name:</p>
              <p className={styles.battery__information}>{ name }</p>
            </div>
            <div className={styles.battery__item}>
              <p className={styles.battery__type}>location:</p>
              <p className={styles.battery__information}>{ location }</p>
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  )
}