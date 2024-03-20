import styles from './Engine.module.scss';

export const Engine = ({ engine }) => {
 if (!engine) {
  return null;
 }
 const result = Object.entries(engine);
 console.log(result);
  return (
    <div className={styles.engine}>
      <div>
        <h4 className={styles.engine__header}>engine</h4>

        <div className={styles.engine__item}>
          <p className={styles.engine__type}>type:</p>
          <p className={styles.engine__information}>{ `${engine.type}, ${engine.horsepower} hp`}</p>
        </div>

        {engine.fuelType && (
        <div className={styles.engine__item}>
          <p className={styles.engine__type}>fuel type:</p>
          <p className={styles.engine__information}>{engine.fuelType}</p>
        </div>
        )}
      </div>

      {engine.emissionStandard && (
        <div>
          <h5 className={styles.engine__header}>emission standart</h5>
          <div>
            <div  className={styles.engine__item}>
              <p className={styles.engine__type}>type:</p>
              <p className={styles.engine__information}>{engine.emissionStandard.type}</p>
            </div>

            <div className={styles.engine__item}>
              <p className={styles.engine__type}>compilance year</p>
              <p className={styles.engine__information}>{engine.emissionStandard.complianceYear}</p>
            </div>
          </div>
        </div>
      )}

      { engine.fuelSystem && (
      <div>
        <h5 className={styles.engine__header}>fuel system</h5>

        <div className={styles.engine__item}>
          <p className={styles.engine__type}>type:</p>
          <p className={styles.engine__information}>{engine.fuelSystem.type}</p>
        </div>

        <div className={styles.engine__item}>
          <p className={styles.engine__type}>efficiency:</p>
          <p className={styles.engine__information}>{engine.fuelSystem.efficiency}</p>
        </div>

        <div className={styles.engine__item}>
          <p className={styles.engine__type}>emissions:</p>
          <p className={styles.engine__information}>{`${engine.fuelSystem.emissions.co2}co2, ${engine.fuelSystem.emissions.nox}nox`}</p>
        </div>
      </div>)}
    </div>
  )
}