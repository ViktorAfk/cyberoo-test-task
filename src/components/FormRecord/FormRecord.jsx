import { useForm, FormProvider } from "react-hook-form";
import { FormKey } from "./FormKey/FormKey";
import { FormEngine } from "./FormEngine/FormEngine";
import { FormBattery } from "./FormBattery/FormBattery";
import { FeaturesForm } from "./FormFeatures/Features";
import { FormOwner } from "./FormOwner/FormOwner";
import { FormMaintaince } from "./FormMaintaince/FormMaintaince";
// import styles from './FormRecord.module.scss';

export const FormRecord = () => {
  const methods = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormKey />
        <FormEngine/>
        <FormBattery />
        <FeaturesForm />
        <FormOwner />
        <FormMaintaince />
        <input type="submit" />
      </form>
    </FormProvider>
  )
}