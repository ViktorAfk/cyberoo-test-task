import { useFieldArray, useFormContext } from "react-hook-form"
import styles from './FormOwner.module.scss';

export const FormOwner = () => {
  const { register, control, formState } = useFormContext();
  const { errors } = formState;
  
  const { fields, remove, append } = useFieldArray({
    name: 'owner.insurance.coverage',
    control,
  })

  return (
    <div className={styles['form-owner']}>
      <h3 className={styles['form-owner__header']}>owner</h3>

      <div className={styles.group}>
        <label htmlFor="owner-name">name</label>

        <input 
          id="owner-name" 
          type="text" 
          {...register("owner.name",
            {
              required: {
                value: true,
                message:'Name is required',
            }}
          )}
        />

        <p className={styles.group__error}>{errors.owner?.name?.message}</p>
      </div>

      <div className={styles.group}>
        <label htmlFor="owner-age">age</label>

        <input 
          id="owner-age" 
          type="number" 
          {...register("owner.age",
            {
              required: {
                value: true,
                message:'Age is required',
            }}
          )}
        />
        <p className={styles.group__error}>{errors.owner?.age?.message}</p>
      </div>

      <div>
        <h4 className={styles['form-owner__header-h4']}>address</h4>

        <div className={styles.group}>
          <label htmlFor="street">street</label>

          <input 
            id="street"
            type="text" 
            {...register("owner.address.street",
              {
                required: {
                  value: true,
                  message:'Street is required',
              }}
            )}
          />

          <p className={styles.group__error}>{errors.owner?.address?.street?.message}</p>
        </div>
        
        <div className={styles.group}>
          <label htmlFor="city">city</label>

          <input 
            id="city" 
            type="text" 
            {...register("owner.address.city",
              {
                required: {
                  value: true,
                  message:'City is required',
              }}
            )}
          />

          <p className={styles.group__error}>{errors.owner?.address?.city?.message}</p>
        </div>

        <div className={styles.group}>
          <label htmlFor="state">state</label>

          <input 
            id="state" 
            type="text" 
            {...register("owner.address.state",
              {
                required: {
                  value: true,
                  message:'State is required',
              }}
            )}
          />

          <p className={styles.group__error}>{errors.owner?.address?.state?.message}</p>
        </div>

        <div className={styles.group}>
          <label htmlFor="zip-code">zip code</label>

          <input 
            id="zip-code" 
            type="text" 
            {...register("owner.address.zipCode",
            {
              required: {
                value: true,
                message:'Zip code is required',
            }}
            )}
          />

          <p className={styles.group__error}>{errors.owner?.address?.zipCode?.message}</p>
        </div>
      </div>
      <div>
        <h4 className={styles['form-owner__header-h4']}>contact</h4>

        <div className={styles.group}>
          <label htmlFor="phone">phone</label>

          <input 
            type="tel"
            id="phone" 
            {...register("owner.contact.phone",
              {
                required: {
                  value: true,
                  message:'Contact phone is required',
              }}
            )}
          />

          <p className={styles.group__error}>{errors.owner?.contact?.phone?.message}</p>
        </div>

        <div className={styles.group}>
          <label htmlFor="email">email</label>
          
          <input 
            type="email" 
            id="email" 
            {...register("owner.contact.email",
              {
                required: {
                  value: true,
                  message:'Contact phone is required',
              }}
            )}
          />

          <p className={styles.group__error}>{errors.owner?.contact?.email?.message}</p>
        </div>
        
      </div>

      <div>
        <h4 className={styles['form-owner__header-h4']}>insurance</h4>

        <div>
          <div className={styles.group}>
            <label htmlFor="provider">provider</label>

            <input 
              type="text"  
              id="provider" 
              {...register("owner.insurance.provider",
                {
                  required: {
                    value: true,
                    message:'Insurance provider is required',
                }}
              )}
            />

          <p className={styles.group__error}>{errors.owner?.insurance?.provider?.message}</p>
          </div>

          <div className={styles.group}>
            <label htmlFor="policy-number">policy number</label>
            
            <input 
              type="text"  
              id="policy-number" 
              {...register("owner.insurance.policyNumber",
                {
                  required: {
                    value: true,
                    message:'Insurance policy number is required',
                }}
              )}
            />

            <p className={styles.group__error}>{errors.owner?.insurance?.policyNumber?.message}</p>
          </div>

          <div>
            <h5 className={styles['form-owner__header-h5']}>coverage</h5>
                {fields.map((field, index) => {
                  return (
                  <div className={styles.group} key={field.id}>
                    <label htmlFor="insurance-coverage">case</label>
                    <input 
                      type="text"  
                      id="insurance-coverage" 
                      {...register(`owner.insurance.coverage.${index}`,
                        {
                          required: {
                            value: true,
                            message:'Insurance coverage is required',
                        }}
                      )}
                    />

                    <p className={styles.group__error}>{errors.owner?.insurance?.coverage?.[index]?.message}</p>
                      {index > 0 && (
                        <button
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
            <button className={styles['add-button']} type="button" onClick={() => append('')}>Add coverage</button>
          </div>
        </div>
      </div>
    </div>
  )
}