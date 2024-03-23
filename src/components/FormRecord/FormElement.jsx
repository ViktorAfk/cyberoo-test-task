import { FormProvider, useForm } from 'react-hook-form';
import { addNewCarRecord } from '../../features/records/records';
import { useDispatch } from 'react-redux';
import { FormKey } from './FormKey/FormKey';
import { FormOwner } from './FormOwner/FormOwner';
import { FormEngine } from './FormEngine/FormEngine';
import { FormBattery } from './FormBattery/FormBattery';
import { FeaturesForm } from './FormFeatures/Features';
import { FormMaintaince } from './FormMaintaince/FormMaintaince';
import cn from 'classnames';
import styles from './FormElement.module.scss';
import { useState } from 'react';

export const FormElement = () => {
  const [ type, setType ] = useState()
  const methods = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data)
    dispatch(addNewCarRecord(data));
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
                  [styles['formelement__button-select--active']]: type === 'engine'
                  })} 
                  onClick={() => setType('engine')}
                >
                  engine
                </button>
            
                <button className={cn(styles['formelement__button-select'], {
                  [styles['formelement__button-select--active']]: type === 'battery'
                  })} 
                  onClick={() => setType('battery')}
                >
                  battery
                </button>
              </div>
              { type === 'engine' && <FormEngine />}
              { type  === 'battery' && <FormBattery />}
            </div>
            <FormMaintaince />
          </div>
          <div>
           
          </div>
        </div>

        <button className={styles.formelement__button} onSubmit={methods.handleSubmit(onSubmit)} type="submit"> Send </button>
      </form>
    </FormProvider>
  )
}
