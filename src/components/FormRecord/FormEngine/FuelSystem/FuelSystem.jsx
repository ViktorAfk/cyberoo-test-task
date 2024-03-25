import styles from './FuelSystem.module.scss';

export const FuelSystem = ({ register, errors }) => {
  
  const engineFuel = 'engine.fuelSystem.'
  
  return (
    <div>
      <h4 className={styles['fuel-system__header-h4']}>fuel system</h4>
      <div className={styles.group}>
        <label htmlFor="type">
          type
        </label>
        <input 
          id="type" 
          type="text" 
          {...register(engineFuel + "type", {
          required: {
            value: true,
            message:'Type is required',
          } })}
          />
        <p className={styles.group__error}>{errors.engine?.fuelSystem?.type?.message}</p>
      </div>

      <div className={styles.group}>
        <label htmlFor="efficiency">
          efficiency
        </label>
        <input 
          id="efficiency" 
          type="text" 
          {...register(engineFuel + "efficiency",
            {
              required: {
                value: true,
                message:'Efficiency is required',
            }}
          )}
        />
        <p className={styles.group__error}>{errors.engine?.fuelSystem?.efficiency?.message}</p>
      </div>

      <div>
        <h5 className={styles['fuel-system__header-h5']}>emissions</h5>
        
        <div className={styles.group}>
          <label htmlFor="co2">
          co2
          </label>
          <input 
          id="co2" 
          type="text" 
          {...register(engineFuel + "emissions.co2",
            {
              required: {
                value: true,
                message:'co2 is required',
            }}
          )}
          />
          <p className={styles.group__error}>{errors.engine?.fuelSystem?.emissions?.co2?.message}</p>
        </div>

        <div className={styles.group}>
        <label htmlFor="nox">
          nox
          </label>
          <input 
            id="nox" 
            type="text" 
            {...register(engineFuel + "emissions.nox",
            {
              required: {
                value: true,
                message:'nox is required',
            }}
            )}
          />
          <p className={styles.group__error}>{errors.engine?.fuelSystem?.emissions?.nox?.message}</p>
        </div>
      </div>
    </div>
  )
}