import { useFormContext, useFieldArray, } from "react-hook-form"
import styles from './Features.module.scss';

export const FeaturesForm = () => {
  const { register, control } = useFormContext({
    defaultValues: {
      features: ['']
    }
  });
  const { fields, append, remove } = useFieldArray({
    name: 'features',
    control
  });

  return (
    <div>
      <h3 className={styles.features__header}>features</h3>
        {
          fields.map((field, index) => {
            return (
              <div className={styles.group} key={field.id}>
                <label htmlFor="feature">feture</label>
                <input  id="feature" type="text" {...register(`features.${index}`)}/>
                {index > 0 && (
                  <button
                    title="remove feature"
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
            )
          })
        }
      <button className={styles['add-button']} type="button" onClick={() => append('')}>Add features</button>
    </div>
  )
}