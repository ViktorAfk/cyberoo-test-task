import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ModalWindow } from '../../ModalWindow/ModalWindow';
import { Breadcrumbs } from '../../BreadCrumbs/BreadCrumbs';
import styles from './CarsCatalog.module.scss';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';

export const CarsCatalog = () => {
  const [modal, setModal] = useState('');
  const { carsRecords, hasError } = useSelector(store => store.records);
  
  return (
    <section className={styles.cars}>
      <Breadcrumbs />
      {hasError && <ErrorMessage />}
      <div  className={ styles['cars-catalog'] }>
      { carsRecords.map((carRecord) => {
        const [name, record] = carRecord;
        const {
          manufacturer, 
          carId, 
          year, 
          model,
        } = record;

        return (
        <article className={ styles.cars__card } key={ name }>
          <div className={styles['cars__img-container']}>
            <img className={styles.cars__img} src="./car-item.png" alt="" />
          </div>
          <div className={styles['cars__card-container']}>
            <div className={styles['cars__card-header-container']}>
              <h3 className={styles['cars__card-header']}>{`${manufacturer} ${model}, ${year}`}</h3>
              <p className={styles['cars__card-text']}>{`car id: ${carId}`}</p>
            </div>

            <div className={styles['cars__card-item']}>
              <Link
                className={styles['cars__button-view']}
                to={`/cars/${ name }`} 
              >
                View more
              </Link>

              <button
                className={styles['cars__button-delete']}
                type='button' 
                onClick={() => setModal(name)}
              >
                delete card
              </button>
            </div>
          </div>
        </article>
       )})}
      </div>
    
      <ModalWindow  openModal={modal} closeModal={setModal}>
        <p className={styles['cars__modal-text']}>Are you sure you want to delete information?</p>
      </ModalWindow>
    </section>
  )
}
