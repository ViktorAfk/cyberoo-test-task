import { useState } from 'react';
import cars from '../public/cars.json';
import styles from './App.module.scss'
 export const  App = () => {
  const [count, setCount] = useState(0)
  
  return (
      <div className={styles['cars-catalog']}>
       {cars.map(car => (
        <article className={styles.car}>
          <p>car id: {car.carId}</p>
          <p>manufacture: {car.manufacturer}</p>
          <p>model: {car.model}</p>
          <p>year: {car.year}</p>
          <p></p>
        </article>
       ))}
      </div>
  )
}


