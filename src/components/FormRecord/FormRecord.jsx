import { useForm, FormProvider } from "react-hook-form";
import { FormKey } from "./FormKey/FormKey";
import { FormEngine } from "./FormEngine/FormEngine";
import { FormBattery } from "./FormBattery/FormBattery";
import { FeaturesForm } from "./FormFeatures/Features";
import { FormOwner } from "./FormOwner/FormOwner";
import { FormMaintaince } from "./FormMaintaince/FormMaintaince";
import { useDispatch } from "react-redux";
import { addNewCarRecord } from "../../features/records/records";

import styles from './FormRecord.module.scss';

export const FormRecord = () => {
  const methods = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data)
    dispatch(addNewCarRecord(data))
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.formrecord}>
        <h2 className={styles.formrecord__header}>Create record</h2>
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.form__container}>
            <FormKey />
            <FormEngine/>
            <FormBattery />
            <FeaturesForm />
            <FormOwner />
            <FormMaintaince />
          </div>

          <input type="submit" />
        </form>
      </div>
    </FormProvider>
  )
}
