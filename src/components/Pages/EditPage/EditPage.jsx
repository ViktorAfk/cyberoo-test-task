import { useDispatch, useSelector } from "react-redux"
import { FormElement } from "../../FormRecord/FormElement"
import { Breadcrumbs } from "../../BreadCrumbs/BreadCrumbs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCarRecord } from "../../../features/car/car";
import styles from './EditPage.module.scss';

export const EditPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const { currentCar } = useSelector(store => store.car);

  useEffect( () => {
    if (!currentCar) {
     dispatch(getCarRecord(id));
    }
  })

  return (
    <div className={styles['edit-page']}>
      <Breadcrumbs />

      <h2 className={styles['edit-page__header']}>Edit record</h2>

      <FormElement currentCar={currentCar} name={id}/>
    </div>
  )
}