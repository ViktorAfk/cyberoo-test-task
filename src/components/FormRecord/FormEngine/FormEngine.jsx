import { useFormContext } from 'react-hook-form';
import { FuelSystem } from './FuelSystem/FuelSystem';
import styles from './FormEngine.module.scss';

export const FormEngine = () => {
  const {
    register,
  } = useFormContext();
 
  const engineEmission = 'engine.emissionStandard.';

  return (
    <div className={styles['form-engine']}>
      <h3 className={styles['form-engine__header']}>engine</h3>

      <div className={styles.group}>
        <label htmlFor="type">
          type
        </label>
        <input id="type" {...register("engine.type")}/> 
      </div>

      <div className={styles.group}>
        <label htmlFor="horse-power">
          horse power
        </label>
        <input id="horse-power" {...register("engine.horsepower")}/> 
      </div>

      <div className={styles.group}>
        <label htmlFor="fuel-type">
          fuel type
        </label>
        <input id="fuel-type" {...register("engine.fuelType")}/> 
      </div>

      <div>
        <h4 className={styles['form-engine__header-h4']}>emission standard</h4>
        <div className={styles.group}>
          <label htmlFor="emissionStandard-type">type</label>
          <input id="emissionStandard-type" type="text"  {...register(engineEmission + "type")}/>
        </div>

        <div className={styles.group}>
          <label htmlFor="emissionStandard-complianceYear">compliance year</label>
          <input id="emissionStandard-complianceYear" type="text"  {...register(engineEmission + "complianceYear")}/>
        </div>
      </div>

      <FuelSystem register={register}/>

    </div>
  )
}