import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteCarRecord, removeCarRecord } from "../../features/records/records";
import styles from './ModalWindow.module.scss'

export const ModalWindow = ({ children, openModal: name, closeModal }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const handleDelete = () => {
    dispatch(removeCarRecord(name));
    dispatch(deleteCarRecord(name));
    closeModal('');
  };

  useEffect(() => {
    if (name && ref.current) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [ name ]);

  return (

    <dialog
      className={styles.dialog}
      ref={ref}
      onCancel={() =>closeModal}
    >
      
      <div className={styles.dialog__container}>
        {children}
        <div className={styles.dialog__buttons}>
          <button 
            type="button" 
            className={styles['dialog__button-cancel']} 
            onClick={() =>closeModal('')}
          >
            no
          </button>

          <button 
            className={styles['dialog__button-delete']}
            onClick={handleDelete} 
            type="button"
          >
            yes
          </button>
        </div>
      </div>
    </dialog>

  )
}
