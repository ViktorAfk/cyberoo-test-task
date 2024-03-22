import styles from './FuelSystem.module.scss';

export const FuelSystem = ({ register }) => {

  const engineFuel = 'engine.fuelSystem.'
  
  return (
    <div>
      <h4 className={styles['fuel-system__header-h4']}>fuel system</h4>
      <div className={styles.group}>
        <label htmlFor="type">
          type
        </label>
        <input id="type" type="text" {...register(engineFuel + "type")}/>
      </div>

      <div className={styles.group}>
        <label htmlFor="efficiency">
          efficiency
        </label>
        <input id="efficiency" type="text" {...register(engineFuel + "efficiency")}/>
      </div>

      <div>
        <h5 className={styles['fuel-system__header-h5']}>emissions</h5>
        
        <div className={styles.group}>
          <label htmlFor="co2">
          co2
          </label>
          <input id="co2" type="text" {...register(engineFuel + "emissions.co2")}/>
        </div>

        <div className={styles.group}>
        <label htmlFor="nox">
          nox
          </label>
          <input id="nox" type="text" {...register(engineFuel + "emissions.nox")}/>
        </div>
      </div>
    </div>
  )
}