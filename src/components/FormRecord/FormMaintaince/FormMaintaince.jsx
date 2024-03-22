import { useFieldArray, useFormContext } from "react-hook-form";
import { PartUsed } from "./PartUsed/PartUsed";
import styles from './FormMaintaince.module.scss';

export const FormMaintaince = () => {
  const {register, control} = useFormContext();

  const {fields, append, remove} = useFieldArray({
    name: 'maintenanceRecords',
    control,
  })

  return (
    <div>
      <h3 className={styles.mainteince__header}>maintaince records</h3>
      <div>
        {fields.map((field, index) => (
          <div key={field.id}>
            <div className={styles.group}>
              <label htmlFor="date">date</label>
              <input type="date" id="date" {...register(`maintenanceRecords.${index}.date`)}/>
            </div>

            <div className={styles.group}>
              <label htmlFor="description">description</label>
              <input type="text" id="description" {...register(`maintenanceRecords.${index}.description`)}/>
            </div >

            <div className={styles.group}>
              <label htmlFor="mileage">mileage</label>
              <input type="text" id="mileage" {...register(`maintenanceRecords.${index}.mileage`)}/>
            </div>

            <div>
              <h4 className={styles['mainteince__header-h4']}>service center</h4>
                <div className={styles.group}>
                  <label htmlFor="service-center">name</label>
                  <input type="text" id="service-center" {...register(`maintenanceRecords.${index}.serviceCenter.name`)}/>
                </div>

                <div className={styles.group}>
                  <label htmlFor="service-center">location</label>
                  <input type="text" id="service-center" {...register(`maintenanceRecords.${index}.serviceCenter.location`)}/>
                  {
                    index > 0 && (
                    <button 
                      onClick={() => remove(index)} 
                      type="button"
                      className={styles['remove-button']}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.89471 8L15.5957 2.29519C16.1205 1.77008 16.1205 0.918938 15.5957 0.393831C15.0709 -0.131277 14.2204 -0.131277 13.6956 0.393831L7.99463 6.09865L2.29365 0.393831C1.76889 -0.131277 0.918321 -0.131277 0.393566 0.393831C-0.131189 0.918938 -0.131189 1.77008 0.393566 2.29519L6.09455 8L0.393566 13.7048C-0.131189 14.2299 -0.131189 15.0811 0.393566 15.6062C0.918321 16.1313 1.76889 16.1313 2.29365 15.6062L7.99463 9.90135L13.6956 15.6062C14.2204 16.1313 15.0709 16.1313 15.5957 15.6062C16.1205 15.0811 16.1205 14.2299 15.5957 13.7048L9.89471 8Z" fill="#97B6F0"/>
                      </svg>
                    </button>
                    )
                 }
                </div>
            </div>
            <PartUsed mainIndex={index}/>
          </div>
        ))}
        <button
          className={styles['add-button']}
          onClick={() => append({
            date: '',
            description: '',
            mileage: '',
            serviceCenter: {
              name: '',
              location:'',
            }
          })} 
          type="button"
        >
          add record
        </button>
      </div>
    </div>
  )
}