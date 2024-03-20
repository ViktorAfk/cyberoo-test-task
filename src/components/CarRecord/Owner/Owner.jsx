import styles from './Owner.module.scss';
import { Adress } from "./Adress/Adress";
import { Contact } from "./Contact/Contact";
import { Inssurance } from "./Inssurance/Inssurance";

export const Owner = ({ owner }) => {
  const { 
     name,
     age,
     address,
     contact,
     insurance
  } = owner;

return (
   <div className={styles.owner}>
     <div className={styles.owner__item}>
      <p className={styles.owner__type}>name:</p>
      <p className={styles.owner__information}>{name}</p>
     </div>

     <div className={styles.owner__item}>
      <p className={styles.owner__type}>age:</p>
      <p className={styles.owner__information}>{age}</p>
     </div>

     <Adress  userAddress={address} />
     <Contact contact={contact} />
     <Inssurance inssurance={insurance} />

   </div>
)
}