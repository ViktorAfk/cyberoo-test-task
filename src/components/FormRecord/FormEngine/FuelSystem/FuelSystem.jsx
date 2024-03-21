
export const FuelSystem = ({ register }) => {

  const engineFuel = 'engine.fuelSystem.'
  
  return (
    <div>
      <h4>fuel system</h4>
      <div>
        <label htmlFor="type">
          type
        </label>
        <input id="type" type="text" {...register(engineFuel + "type")}/>
      </div>

      <div>
        <label htmlFor="efficiency">
          efficiency
        </label>
        <input id="efficiency" type="text" {...register(engineFuel + "efficiency")}/>
      </div>

      <div>
        <h5>emissions</h5>
        
        <div>
          <label htmlFor="co2">
          co2
          </label>
          <input id="co2" type="text" {...register(engineFuel + "emissions.co2")}/>
        </div>

        <div>
        <label htmlFor="nox">
          nox
          </label>
          <input id="nox" type="text" {...register(engineFuel + "emissions.nox")}/>
        </div>
      </div>
    </div>
  )
}