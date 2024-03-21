import { useFormContext, useFieldArray, } from "react-hook-form"

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
      <label htmlFor="features">features</label>
        {
          fields.map((field, index) => {
            return (
              <div key={field.id}>
                <input  id="features" type="text" {...register(`features.${index}`)}/>
                {fields.length > 1 && (
                  <button 
                    type="button" 
                    onClick={() => remove(index)}
                  >
                    Remove feature
                  </button>
                  )}
              </div>
            )
          })
        }
      <button type="button" onClick={() => append('')}>Add features</button>
    </div>
  )
}