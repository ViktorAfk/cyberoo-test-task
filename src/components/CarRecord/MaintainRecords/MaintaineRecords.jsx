import { Fragment } from "react";
import styles from './MaintaineRecords.module.scss';

export const MaintaineRecords = ({ maintenanceRecords }) => {
  console.log(maintenanceRecords)
  const maintainces = maintenanceRecords.map(maintaince => (
    {
     ...maintaince, 
     id: crypto.randomUUID(),
    }
  ));

  return (
    <div className={styles['maintain-record']}>
      {maintainces.map(maintaince => {
        const {
          id, 
          date, 
          description,
          mileage,
          serviceCenter,
          partsUsed,
        } = maintaince;
        console.log(id);
        return (
          <Fragment key={id}>
            <div className={styles['maintain-record__item']}>
              <p className={styles['maintain-record__type']}>date:</p>
              <p className={styles['maintain-record__information']}>{ date }</p>
            </div>

            <div className={styles['maintain-record__item']}>
              <p className={styles['maintain-record__type']}>description</p>
              <p className={styles['maintain-record__information']}>{ description }</p>
            </div>

            <div className={styles['maintain-record__item']}>
              <p className={styles['maintain-record__type']}>mileage</p>
              <p className={styles['maintain-record__information']}>{ mileage }</p>
            </div>

            <div>
              <h5 className={styles['maintain-record__header']}>service center</h5>

              <div className={styles['maintain-record__item']}>
                <p className={styles['maintain-record__type']}>name</p>
                <p className={styles['maintain-record__information']}>{ serviceCenter.name }</p>
              </div>

              <div className={styles['maintain-record__item']}>
                <p className={styles['maintain-record__type']}>location</p>
                <p className={styles['maintain-record__information']}>{ serviceCenter.location }</p>
              </div>

              <div>
                <h5 className={styles['maintain-record__header']}>parts used</h5>
                {partsUsed.map(part => (
                <>
                <div className={styles['maintain-record__item']}>
                  <p className={styles['maintain-record__type']}>name</p>
                  <p className={styles['maintain-record__information']}>{part.name}</p>
                </div>

                <div className={styles['maintain-record__item']}>
                  <p className={styles['maintain-record__type']}>quantity</p>
                  <p className={styles['maintain-record__information']}>{part.quantity}</p>
                </div>
                </>
              ))}
              </div>
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}