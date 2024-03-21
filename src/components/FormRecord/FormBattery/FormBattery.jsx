import { useFormContext, useFieldArray } from "react-hook-form"

export const FormBattery = () => {
  const { register, control } = useFormContext();
  const {fields, append, remove} = useFieldArray({
    name: 'chargingStations',
    control,
  })

  return (
    <div>
      <h3>battery</h3>
      <div>
        <label htmlFor="capacity">capacity</label>
        <input 
          id="capacity" 
          type="text" 
          {...register("battery.capacity")}
        />
      </div>

      <div>
        <label htmlFor="charging-time">charging time</label>
        <input 
          id="charging-time" 
          type="text" 
          {...register("battery.chargingTime")}
        />
      </div>

      <div>
        <h4>warranty</h4>
        <div>
          <label htmlFor="years">years</label>
          <input 
            id="years" 
            type="text" 
            {...register("battery.warranty.years")}
          />
        </div>

        <div>
          <label htmlFor="coverage">coverage</label>
          <input 
            id="coverage" 
            type="text" 
            {...register("battery.warranty.coverage")}
          />
        </div>

        <div>
          <div>
            <label htmlFor="chargingStation-name">charging stations</label>
              <div>
                {fields.map((field, index) => {
                  return (
                  <div key={field.id}>
                    <input type="text" {...register(`chargingStations.${index}.name`)} />
                    <input type="text" {...register(`chargingStations.${index}.location`)} />
                    {fields.length > 1 && (
                      <button 
                      type="button" 
                      onClick={() => remove(index)}
                    >
                      Remove station
                    </button>
                    )}
                  </div>
                  )
                })}
                <button 
                  type="button" 
                  onClick={() => append({
                    name: '',
                    location: '',
                  })}
                >
                  Add station
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
