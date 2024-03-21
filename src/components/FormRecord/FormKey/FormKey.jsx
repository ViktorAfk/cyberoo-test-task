import { useFormContext } from "react-hook-form"

export const FormKey = () => {
  const {register} = useFormContext()
  return (
    <div>
      <div>
          <label htmlFor="carId">car id</label>
          <input 
            type="text" 
            id="carId" 
            {...register("carId")} 
          />
        </div>

        <div>
          <label htmlFor="manufacture">manufacture</label>
            <input 
              id="manufacture" 
              type="text" 
              {...register("manufacture")} 
            />
        </div>

        <div>
        <label htmlFor="model">model</label>
          <input 
            id="model" 
            type="text" 
            {...register("model")} 
          />
        </div>

        <div>
          <label htmlFor="color">color</label>
          <input 
            id="color" 
            type="text" 
            {...register("color")} 
          />
        </div>
    </div>
  )
}