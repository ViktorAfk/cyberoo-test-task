import { Link } from 'react-router-dom';
import cars from '../../../public/cars.json';
import styles from './CarsCatalog.module.scss';

export const CarsCatalog = () => {

  return (
    <section className={styles['cars-catalog']}>
      {cars.map(car => (
        <article className={styles.car} key={car.carId}>
          <p>car id: {car.carId}</p>
          <p>manufacture: {car.manufacturer}</p>
          <p>model: {car.model}</p>
          <p>year: {car.year}</p>
          <Link to={`/cars/${car.carId}`}>
            View more
          </Link>
        </article>
       ))}
    </section>
  )
}