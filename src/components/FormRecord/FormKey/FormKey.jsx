import { useFormContext } from "react-hook-form"
import styles from './FormKey.module.scss';

export const FormKey = () => {
  const { register } = useFormContext()
  return (
    <div className={styles['form-key']}>
        <div className={styles.group}>
          <label htmlFor="carId">car id</label>
          <input
            type="text" 
            id="carId" 
            { ...register("carId") } 
          />
        </div>

        <div className={ styles.group }>
          <label htmlFor="manufacture">manufacture</label>
            <input 
              id="manufacture" 
              type="text" 
              {...register("manufacture")} 
            />
        </div>

        <div className={ styles.group }>
          <label htmlFor="model">model</label>
            <input 
              id="model" 
              type="text" 
              { ...register("model") } 
            />
        </div>

        <div className={ styles.group }>
          <label htmlFor="color">color</label>
          <input 
            id="color" 
            type="text" 
            { ...register("color") } 
          />
        </div>
    </div>
  )
}