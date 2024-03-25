import { useFormContext } from 'react-hook-form';
import { FuelSystem } from './FuelSystem/FuelSystem';
import styles from './FormEngine.module.scss';

export const FormEngine = () => {
  const {
    register,
    formState,
  } = useFormContext();
  const { errors } = formState;
  const engineEmission = 'engine.emissionStandard.';

  return (
    <div className={styles['form-engine']}>
      <div className={styles.group}>
        <label htmlFor="type">
          type
        </label>
        <input id="type" {...register("engine.type",
        {
          required: {
            value: true,
            message:'Type is required',
        }}
        )}/> 

        <p className={styles.group__error}>{errors.engine?.type?.message}</p>
      </div>

      <div className={styles.group}>
        <label htmlFor="horse-power">
          horse power
        </label>

        <input 
        id="horse-power" 
        {...register("engine.horsepower",
          {
            required: {
              value: true,
              message:'Horsepower is required',
          }}
        )}/> 

        <p className={styles.group__error}>{errors.engine?.horsepower?.message}</p>
      </div>

      <div className={styles.group}>
        <label htmlFor="fuel-type">
          fuel type
        </label>
        <input 
          id="fuel-type" 
          {...register("engine.fuelType",
            {
              required: {
                value: true,
                message:'Fuel type is required',
            }}
          )}
        />

        <p className={styles.group__error}>{errors.engine?.fuelType?.message}</p>
      </div>

      <div>
        <h4 className={styles['form-engine__header-h4']}>emission standard</h4>
        <div className={styles.group}>
          <label htmlFor="emissionStandard-type">type</label>

          <input 
            id="emissionStandard-type" 
            type="text"  
            {...register(engineEmission + "type",
              {
                required: {
                  value: true,
                  message:'Emission standard type is required',
              }}
            )}
          />

          <p className={styles.group__error}>{errors.engine?.emissionStandard?.type?.message}</p>
        </div>

        <div className={styles.group}>
          <label htmlFor="emissionStandard-complianceYear">compliance year</label>

          <input 
            id="emissionStandard-complianceYear" 
            type="text"  
            {...register(engineEmission + "complianceYear",
            {
              required: {
                value: true,
                message:'Emission standard compliance year is required',
            }}
            )}
          />

          <p className={styles.group__error}>{errors.engine?.emissionStandard?.complianceYear?.message}</p>
        </div>
      </div>

      <FuelSystem register={ register } errors={errors} />

    </div>
  )
}