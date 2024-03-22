import { useFormContext, useFieldArray } from "react-hook-form"
import styles from './FormBattery.module.scss';

export const FormBattery = () => {
  const { register, control } = useFormContext();
  const {fields, append, remove} = useFieldArray({
    name: 'chargingStations',
    control,
  })

  return (
    <div className={styles.formbattery}>
      <h3 className={styles.formbattery__header}>battery</h3>
      <div className={styles.group}>
        <label htmlFor="capacity">capacity</label>
        <input 
          id="capacity" 
          type="text" 
          {...register("battery.capacity")}
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="charging-time">charging time</label>
        <input 
          id="charging-time" 
          type="text" 
          {...register("battery.chargingTime")}
        />
      </div>

      <div>
        <h4 className={styles['formbattery__header-h4']}>warranty</h4>
        <div className={styles.group}>
          <label htmlFor="years">years</label>
          <input 
            id="years" 
            type="text" 
            {...register("battery.warranty.years")}
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="coverage">coverage</label>
          <input 
            id="coverage" 
            type="text" 
            {...register("battery.warranty.coverage")}
          />
        </div>

        <div>
          <div>
            <h4 className={styles['formbattery__header-h4']}>charging stations</h4>
              <div>
                {fields.map((field, index) => {
                  return (
                  <div key={field.id}>
                    <div className={styles.group}>
                      <label htmlFor="charging-name">name</label>
                      <input id="charging-name" type="text" {...register(`chargingStations.${index}.name`)} />
                    </div>

                    <div className={styles.group}>
                      <label htmlFor="chaghing-location">location</label>
                      <input id="chaghing-location" type="text" {...register(`chargingStations.${index}.location`)} />

                      {index > 0 && (
                      <button
                        title="remove station"
                        className={styles['remove-button']}
                        type="button" 
                        onClick={() => remove(index)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M9.89471 8L15.5957 2.29519C16.1205 1.77008 16.1205 0.918938 15.5957 0.393831C15.0709 -0.131277 14.2204 -0.131277 13.6956 0.393831L7.99463 6.09865L2.29365 0.393831C1.76889 -0.131277 0.918321 -0.131277 0.393566 0.393831C-0.131189 0.918938 -0.131189 1.77008 0.393566 2.29519L6.09455 8L0.393566 13.7048C-0.131189 14.2299 -0.131189 15.0811 0.393566 15.6062C0.918321 16.1313 1.76889 16.1313 2.29365 15.6062L7.99463 9.90135L13.6956 15.6062C14.2204 16.1313 15.0709 16.1313 15.5957 15.6062C16.1205 15.0811 16.1205 14.2299 15.5957 13.7048L9.89471 8Z" fill="#97B6F0"/>
                        </svg>
                      </button>
                    )}
                    </div>
                  </div>
                  )
                })}
                <button 
                  className={styles['add-button']}
                  type="button" 
                  onClick={() => append({
                    name: '',
                    location: '',
                  })}
                >
                  Add station
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
