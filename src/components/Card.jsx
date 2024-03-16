import { useParams } from "react-router-dom"

export const CurrentCar = () => {
 const { id } = useParams();
  return (
    <div>
      {`I am a car №${id}`}
    </div>
  )
}