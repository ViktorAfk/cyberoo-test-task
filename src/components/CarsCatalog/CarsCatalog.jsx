import { Link } from 'react-router-dom';
import styles from './CarsCatalog.module.scss';
import { useSelector } from 'react-redux';

export const CarsCatalog = () => {

  const { carsRecords } = useSelector(store => store.records);
  console.log(carsRecords);
  return (
    <section className={ styles['cars-catalog'] }>
      { carsRecords.map((carRecord) => {
        const [name, record] = carRecord;
        
        return (
        <article className={ styles['cars-catalog__car'] } key={ record.carId }>
          <p className={styles.car__item}>car id: { record.carId }</p>
          <p>manufacture: { record.manufacturer }</p>
          <p>model: { record.model }</p>
          <p>year: { record.year }</p>
          <Link to={`/cars/${ name }`} >
            View more
          </Link>
        </article>
       )})}
    </section>
  )
}