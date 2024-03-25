import { FormProvider, useForm } from 'react-hook-form';
import { addNewCarRecord } from '../../features/records/records';
import { useDispatch } from 'react-redux';
import { FormKey } from './FormKey/FormKey';
import { FormOwner } from './FormOwner/FormOwner';
import { FormEngine } from './FormEngine/FormEngine';
import { FormBattery } from './FormBattery/FormBattery';
import { FeaturesForm } from './FormFeatures/Features';
import { FormMaintaince } from './FormMaintaince/FormMaintaince';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './FormElement.module.scss';
import { updateCarRecord } from '../../features/car/car';


export const FormElement = ({ currentCar, name }) => {
  const [ type, setType ] = useState('');
  const methods = useForm( {
    values: currentCar,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formState, reset, setError} = methods;
  const { errors, isSubmitting } = formState;
  const hasEngine = currentCar ? Object.hasOwn(currentCar, 'engine') : null;
  const hasBattery = currentCar ? Object.hasOwn(currentCar, 'battery') : null;
 
  const onSubmit = (data) => {
    const hasSomething = !Object.hasOwn(data, 'battery') || !Object.hasOwn(data, 'battery');

    try{

      if (currentCar) {
        const editInfo = [name, data];
        dispatch(updateCarRecord(editInfo));
  
        return;
      }

      if (hasSomething) {
        throw new Error()
      }

      setTimeout(() => {
        const newData = { ...data}
      if (type === 'engine') {
        delete newData.battery
      }
      if (type === 'battery') {
        delete newData.engine
      }
  
      dispatch(addNewCarRecord(newData));
      reset()
      }, 1000)

      

    } catch(error) {
      setError("root", {
        message: 'You need to choose battery or engine',
      })
  }

  };

  return (
    <FormProvider {...methods}>
      <form  className={styles.formelement} onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={styles.formelement__container}>
          <div className={styles['formelement__container-main']}>
            <div>
              <FormKey />
              <FeaturesForm />
            </div>
            <FormOwner />
            <div >
              <div className={styles['formelement__button-container']}>
                <button 
                  className={cn(styles['formelement__button-select'], {
                  [styles['formelement__button-select--active']]: type === 'engine' || hasEngine
                  })} 
                  onClick={() => setType('engine')}
                >
                  engine
                </button>
            
                <button className={cn(styles['formelement__button-select'], {
                  [styles['formelement__button-select--active']]: type === 'battery' || hasBattery
                  })} 
                  onClick={() => setType('battery')}
                >
                  battery
                </button>
              </div>
              { (type === 'engine' || hasEngine) && <FormEngine />}
              { (type  === 'battery' || hasBattery) && (<FormBattery />)}
              {errors.root && <p>{errors.root.message}</p>}
            </div>
            <FormMaintaince />
          </div>
        </div>

        {currentCar ? ( 
         <div className={styles['formelement__edit-buttons']}>
            <button 
              type="submit"
              disabled={isSubmitting}
              onSubmit={methods.handleSubmit(onSubmit)}
              className={styles['formelement__button-save']}
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className={styles['formelement__button-back']}
            >
              Back
            </button>
          </div>) : (
            <button
            disabled={isSubmitting}
            className={ cn(styles.formelement__button, {
              [styles['formelement__button--is-disabled']]: isSubmitting,
            })} 
            onSubmit={methods.handleSubmit(onSubmit)} 
            type="submit"
          > 
            Send 
          </button>
         )}
      </form>
    </FormProvider>
  )
}
