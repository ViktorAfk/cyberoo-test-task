import { useFormContext } from 'react-hook-form';
import styles from './FormKey.module.scss';

export const FormKey = () => {
  const { register, formState } = useFormContext();
  const { errors } =formState;
  return (
    <div className={styles['form-key']}>
      <h3 className={styles['form-key__header']}>Key information</h3>
        <div className={styles.group}>
          <label htmlFor="carId">car id</label>
          <input
            type="text" 
            id="carId" 
            { ...register("carId", {required: {
              value: true,
              message:'Car id is required',
            }})} 
          />
          <p className={styles.group__error}>{errors.carId?.message}</p>
        </div>

        <div className={ styles.group }>
          <label htmlFor="manufacturer">manufacturer</label>
            <input 
              id="manufacturer" 
              type="text" 
              {...register("manufacturer", {required: {
                value: true,
                message:'Manufacturer is required',
              }})} 
            />
          <p className={styles.group__error}>{errors.manufacturer?.message}</p>
        </div>

        <div className={ styles.group }>
          <label htmlFor="model">model</label>
            <input 
              id="model" 
              type="text" 
              { ...register("model", {required: {
                value: true,
                message:'Model is required',
              }}) } 
            />
          <p className={styles.group__error}>{errors.model?.message}</p>
        </div>

        <div className={ styles.group }>
          <label htmlFor="color">color</label>
          <input 
            id="color" 
            type="text" 
            { ...register("color", {required: {
              value: true,
              message:'Color is required',
            }}) } 
          />
          <p className={styles.group__error}>{errors.color?.message}</p>
        </div>

        <div className={ styles.group }>
          <label htmlFor="year">year</label>
          <input 
            id="year" 
            type="text"
            { ...register("year", {required: {
              value: true,
              message:'Year is required',
            }}) } 
          />
          <p className={styles.group__error}>{errors.year?.message}</p>
        </div>
    </div>
  )
}