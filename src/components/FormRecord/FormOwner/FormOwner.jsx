import { useFormContext, useFieldArray } from "react-hook-form"

export const FormOwner = () => {
  const { register, control } = useFormContext();
  

  const { fields, remove, append } = useFieldArray({
    name: 'owner.insurance.coverage',
    control,
  })

  return (
    <div>
      <h3>owner</h3>
      <div>
        <label htmlFor="owner-name">name</label>

        <input 
          id="owner-name" 
          type="text" 
          {...register("owner.name")}
        />
      </div>

      <div>
        <label htmlFor="owner-age">age</label>

        <input 
          id="owner-age" 
          type="text" 
          {...register("owner.age")}
        />
      </div>

      <div>
        <h4>address</h4>

        <div>
          <label htmlFor="street">street</label>

          <input 
            id="street"
            type="text" 
            {...register("owner.address.street")}
          />
        </div>
        
        <div>
          <label htmlFor="city">city</label>

          <input 
            id="city" 
            type="text" 
            {...register("owner.address.city")}
          />
        </div>

        <div>
          <label htmlFor="state">state</label>

          <input 
            id="state" 
            type="text" 
            {...register("owner.address.state")}
          />
        </div>

        <div>
          <label htmlFor="zip-code">zip code</label>

          <input 
            id="zip-code" 
            type="text" 
            {...register("owner.address.zipCode")}
          />
        </div>
      </div>
      <div>
        <h4>contact</h4>

        <div>
          <label htmlFor="phone">phone</label>

          <input 
            type="tel"
            id="phone" 
            {...register("owner.contact.phone")}
          />
        </div>

        <div>
          <label htmlFor="email">email</label>
          
          <input 
            type="email" 
            id="email" 
            {...register("owner.contact.email")}
          />
        </div>
        
      </div>

      <div>
        <h4>insurance</h4>

        <div>
          <div>
            <label htmlFor="provider">provider</label>

            <input 
              type="text"  
              id="provider" 
              {...register("owner.insurance.provider")}
            />
          </div>

          <div>
            <label htmlFor="policy-number">policy number</label>
            
            <input 
              type="text"  
              id="policy-number" 
              {...register("owner.insurance.policyNumber")}
            />
          </div>

          <div>
            <label htmlFor="insurance-coverage">coverage</label>
                {fields.map((field, index) => {
                  return (
                  <div key={field.id}>
                    <input 
                      type="text"  
                      id="insurance-coverage" 
                      {...register(`owner.insurance.coverage.${index}`)}
                    />
                      {index > 0 && (
                        <button 
                          type="button" 
                          onClick={() => remove(index)}
                        >
                          Remove coverage
                        </button>
                      )}
                  </div>
                  )
                })
              }
            <button type="button" onClick={() => append('')}>Add coverage</button>
          </div>
        </div>
      </div>
    </div>
  )
}