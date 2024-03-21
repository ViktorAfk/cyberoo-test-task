import  { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getCarRecord } from "../../features/car/car";
import { PowerTrain } from "./PowerTrain/PowerTrain";
import { Loader } from "../Loader/Loader";
import { CarDetailsButton } from "../Buttons/CarDetailsButotn/CarDetailsButton";
import styles from './CarRecord.module.scss';
import { Owner } from "./Owner/Owner";
import { MaintaineRecords } from "./MaintainRecords/MaintaineRecords";
import { Button } from "../Buttons/Button/Button";
import { FormRecord } from "../FormRecord/FormRecord";




export const CarRecord = () => {
 const [showOwner, setShowOwner] = useState(false);
 const [showMaintRecords, setShowMaintRecord] = useState(false);

 const { id } = useParams();
 const dispatch = useDispatch();
 const { currentCar, loaded } = useSelector(store => store.car);


useEffect(() => {
 dispatch(getCarRecord(id));

}, [id, dispatch])
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
} =currentCar;

const headerInfo = `${manufacturer} ${model}, ${year}`;

  return (
    <section className={styles['car-section']}>
       <div className={styles['car-container']}>
        {loaded && (<Loader />)}
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
                value={'Maintenance records'} 
                show={showMaintRecords} 
                setShow={setShowMaintRecord} 
              />
              {showMaintRecords && (<MaintaineRecords maintenanceRecords={maintenanceRecords}/>)}
            </div>
          </div>
          <Button>
            Edit
          </Button>
        </article>
        <FormRecord />
      </div>
    </section>
   
  )
}