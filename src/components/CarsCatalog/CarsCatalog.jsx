import { Link } from 'react-router-dom';
import cars from '../../../public/cars.json';
import styles from './CarsCatalog.module.scss';
import { useDispatch, useSelector } from 'react-redux';

export const CarsCatalog = () => {
  const dispatch = useDispatch();
  const { carsRecords } = useSelector(store => store.records);

  return (
    <section className={styles['cars-catalog']}>
      {carsRecords.map((carRecord) => {
        const [name, record] = carRecord;
        
        return (
        <article className={styles.car} key={name}>
          <p>car id: {record.carId}</p>
          <p>manufacture: {record.manufacturer}</p>
          <p>model: {record.model}</p>
          <p>year: {record.year}</p>
          <Link to={`/cars/${record.carId}`}>
            View more
          </Link>
        </article>
       )})}
    </section>
  )
}