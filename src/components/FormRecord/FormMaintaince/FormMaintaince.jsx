import { useFieldArray, useFormContext } from "react-hook-form";
import { PartUsed } from "./PartUsed/PartUsed";

export const FormMaintaince = () => {
  const {register, control} = useFormContext();

  const {fields, append, remove} = useFieldArray({
    name: 'maintenanceRecords',
    control,
  })

  return (
    <div>
      <label htmlFor="maintaince">maintaince records</label>
      <div>
        {fields.map((field, index) => (
          <div key={field.id}>
            <div>
              <label htmlFor="date">date</label>
              <input type="date" id="date" {...register(`maintenanceRecords.${index}.date`)}/>
            </div>

            <div>
              <label htmlFor="description">description</label>
              <input type="text" id="description" {...register(`maintenanceRecords.${index}.description`)}/>
            </div>

            <div>
              <label htmlFor="mileage">mileage</label>
              <input type="text" id="mileage" {...register(`maintenanceRecords.${index}.mileage`)}/>
            </div>

            <div>
              <h4>service center</h4>
                <div>
                  <label htmlFor="service-center">name</label>
                  <input type="text" id="service-center" {...register(`maintenanceRecords.${index}.serviceCenter.name`)}/>
                </div>

                <div>
                  <label htmlFor="service-center">location</label>
                  <input type="text" id="service-center" {...register(`maintenanceRecords.${index}.serviceCenter.location`)}/>
                </div>
            </div>
            <PartUsed />
            {
              index > 0 && (
                <button onClick={() => remove(index)} type="button">
                  remove record
                </button>
              )
            }
          </div>
        ))}
        <button onClick={() => append({
          date: '',
          description: '',
          mileage: '',
          serviceCenter: {
            name: '',
            location:'',
          }
        })} type="button">add record</button>
      </div>
    </div>
  )
}