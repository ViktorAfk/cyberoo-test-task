import { useFormContext } from "react-hook-form";
import { FuelSystem } from "./FuelSystem/FuelSystem";
export const FormEngine = () => {
  const {
    register,
  } = useFormContext();
 
  const engineEmission = 'engine.emissionStandard.';

  return (
    <div>
      <h3>engine</h3>

      <div>
        <label htmlFor="type">
          type
        </label>
        <input id="type" {...register("engine.type")}/> 
      </div>

      <div>
        <label htmlFor="horse-power">
          horse power
        </label>
        <input id="horse-power" {...register("engine.horsepower")}/> 
      </div>

      <div>
        <label htmlFor="fuel-type">
          fuel type
        </label>
        <input id="fuel-type" {...register("engine.fuelType")}/> 
      </div>

      <div>
        <h4>emission standard</h4>
        <div>
          <label htmlFor="emissionStandard-type">type</label>
          <input id="emissionStandard-type" type="text"  {...register(engineEmission + "type")}/>
        </div>

        <div>
          <label htmlFor="emissionStandard-complianceYear">type</label>
          <input id="emissionStandard-complianceYear" type="text"  {...register(engineEmission + "complianceYear")}/>
        </div>
      </div>

      <FuelSystem register={register}/>

    </div>
  )
}