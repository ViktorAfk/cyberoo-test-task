import { useFieldArray, useFormContext } from "react-hook-form"

export const PartUsed = () => {
  const {register, control} = useFormContext();
  const {fields, append, remove} =useFieldArray({
    name: 'maintenanceRecords.partsUsed',
    control,
  });
  return (
    <div>
      <h4>part used</h4>
        <div>
          {fields.map((field, index) => (
            <div key={field.id}>
              <div>
                <label htmlFor="partsUsed-name">name</label>
                <input type="text" id="partsUsed-name" {...register(`maintenanceRecords.partsUsed.name`)}/>
              </div>

              <div>
                <label htmlFor="partsUsed-quantity">quantity</label>
                <input type="text" id="partsUsed-quantity" {...register(`maintenanceRecords.partsUsed.quantity`)}/>
              </div>
              {
                index > 0 && (
                  <button 
                  type="button" 
                  onClick={() => remove(index)}
                >
                  Remove part
                </button>
                )
              }
            </div>

          ))}
          <button onClick={() => append({
            name: '',
            quantity: '',
          })} type="button">Add part</button>
        </div>
    </div>
  )
}