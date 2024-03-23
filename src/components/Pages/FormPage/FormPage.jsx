import { Breadcrumbs } from '../../BreadCrumbs/BreadCrumbs';
import { FormElement } from '../../FormRecord/FormElement';
import styles from './FormPage.module.scss';
// import { FormElement } from "../../FormRecord/FormElement";

export const FormPage = () => {
 
  
  return (
      <div className={styles.formrecord}>
        <Breadcrumbs />
        <h2 className={styles.formrecord__header}>Create record</h2>
        <FormElement />
      </div>
  )
}