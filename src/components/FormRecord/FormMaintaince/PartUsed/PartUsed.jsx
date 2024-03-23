import { useFieldArray, useFormContext } from "react-hook-form"
import styles from './PartUsed.module.scss';

export const PartUsed = ( { mainIndex, errors }) => {
  const { register, control } = useFormContext();
  const {fields, append, remove} =useFieldArray({
    name: 'partsUsed',
    control,
  });
  return (
    <div>
      <div className={styles['part-used__header-container']}>
        <h4 className={styles['part-used__header-h4']}>part used</h4>
        <button 
          className={styles['add-button']}
          onClick={() => append({
          name: '',
          quantity: '',
          })} type="button">
            Add part
        </button>
      </div>
        <div>
          {fields.map((field, index) => (
            <div key={field.id}>
              <div className={styles.group}>
                <label htmlFor="partsUsed-name">name</label>
                <input 
                  type="text" 
                  id="partsUsed-name" 
                  {...register(`maintenanceRecords.${mainIndex}.partsUsed.${index}.name`,
                    {
                      required: {
                        value: true,
                        message:'Part name is required',
                    }}
                  )}
                />

                <p className={styles.group__error}>{errors.maintenanceRecords?.[mainIndex]?.partsUsed?.[index]?.name?.message}</p>
              </div>

              <div className={styles.group}>
                <label htmlFor="partsUsed-quantity">quantity</label>
                <input 
                  type="text" 
                  id="partsUsed-quantity" 
                  {...register(`maintenanceRecords.${mainIndex}.partsUsed.${index}.quantity`,
                    {
                      required: {
                        value: true,
                        message:'Quantity is required',
                    }}
                  )}
                />

                <p className={styles.group__error}>{errors.maintenanceRecords?.[mainIndex]?.partsUsed?.[index]?.quantity?.message}</p>
                {
                index > 0 && (
                  <button 
                  title="remove part"
                  className={styles['remove-button']}
                  type="button" 
                  onClick={() => remove(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.89471 8L15.5957 2.29519C16.1205 1.77008 16.1205 0.918938 15.5957 0.393831C15.0709 -0.131277 14.2204 -0.131277 13.6956 0.393831L7.99463 6.09865L2.29365 0.393831C1.76889 -0.131277 0.918321 -0.131277 0.393566 0.393831C-0.131189 0.918938 -0.131189 1.77008 0.393566 2.29519L6.09455 8L0.393566 13.7048C-0.131189 14.2299 -0.131189 15.0811 0.393566 15.6062C0.918321 16.1313 1.76889 16.1313 2.29365 15.6062L7.99463 9.90135L13.6956 15.6062C14.2204 16.1313 15.0709 16.1313 15.5957 15.6062C16.1205 15.0811 16.1205 14.2299 15.5957 13.7048L9.89471 8Z" fill="#97B6F0"/>
                  </svg>
                </button>
                )
              }
              </div>
            </div>

          ))}
        </div>
    </div>
  )
}