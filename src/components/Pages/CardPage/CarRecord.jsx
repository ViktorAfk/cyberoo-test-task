
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import cn from "classnames";
import { getCarRecord } from "../../../features/car/car";
import { Loader } from "../../Loader/Loader"
import { PowerTrain } from "../../CarRecord/PowerTrain/PowerTrain";
import { CarDetailsButton } from '../../Buttons/CarDetailsButotn/CarDetailsButton';
import { Owner } from '../../CarRecord/Owner/Owner';
import { MaintaineRecords } from '../../CarRecord/MaintainRecords/MaintaineRecords';
import styles from './CarRecord.module.scss';
import { Breadcrumbs } from "../../BreadCrumbs/BreadCrumbs";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";

export const CarRecord = () => {
 const [showOwner, setShowOwner] = useState(false);
 const [showMaintRecords, setShowMaintRecord] = useState(false);
 const dispatch = useDispatch();
 const { id } = useParams();
 console.log(id)
 const { currentCar, loaded, hasError } = useSelector(store => store.car);

useEffect(() => {
dispatch(getCarRecord(id));

}, [id, dispatch]);

if(currentCar === null) {
  return;
}

const {
  carId, 
  manufacturer, 
  model, 
  year, 
  color, 
  owner, 
  maintenanceRecords,
} = currentCar;

const headerInfo = `${manufacturer} ${model}, ${year}`;

  return (
    <section className={styles['car-section']}>
      <div className={styles['car-container']}>
        <Breadcrumbs />
        {loaded && <Loader />}
        {!loaded && hasError && ErrorMessage}
        {!loaded && !hasError && (
        <article className={styles.car}>
          <h3 className={styles['car__header']}>{headerInfo}</h3>
          <div className={styles['car__information']}>
            <div className={styles['car__information--item']}>
              <p>car id:</p>
              <p>{carId},</p>
            </div>

            <div className={styles['car__information--item']}>
              <p>color:</p>
              <p>{color.toLowerCase()}</p>
            </div>
          </div>
          <h2 className={styles['car__overview']}>Overwiev</h2>
            <div className={styles['car__top-section']}>
              <PowerTrain />

              <div className={styles['car__image-container']}>
                <img className={styles.car__image} src="./car-image.avif" alt="" />
              </div>
            </div>

            <div className={styles.car__buttons}>
              <div>
                <CarDetailsButton 
                  show={showOwner} 
                  setShow={setShowOwner} 
                  value={'Owner'} 
                />
            {showOwner && (<Owner owner={owner} />)}
            </div>

            <div>
              <CarDetailsButton
                className={cn({
                  [styles['car-details-button--active']]: showMaintRecords === true
                })}
                value={'Maintenance records'} 
                show={showMaintRecords} 
                setShow={setShowMaintRecord} 
              />
                {showMaintRecords && (<MaintaineRecords maintenanceRecords={maintenanceRecords}/>)}
              </div>
            </div>
            <Link className={styles['car__edit-button']} to={`editform`}>
              Edit
            </Link>
          </article>)}
      </div>
    </section>

  )
}