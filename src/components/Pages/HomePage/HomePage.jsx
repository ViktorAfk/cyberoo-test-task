import { Link } from "react-router-dom"
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles['home-page']}>
      <div className={styles['home-page__container']}>
        <h1 className={styles['home-page__header']}>Welcome to NiceGarage</h1>
        <p className={styles['home-page__text']}>Go to <Link className={styles['home-page__link']} to='cars'>Catalog</Link></p>
      </div>
   </div>
  )
}