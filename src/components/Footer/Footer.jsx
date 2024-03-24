import { Link } from 'react-router-dom';
// import car from '../../features/car/car';
import styles from './Footer.module.scss';
import { scrollToTop } from '../../helpers/helpers';

export const Footer = () => {
  return (
    <footer className={styles['car-footer']}>
      <div className={styles['car-footer__container']}>
         <ul className={styles['car-footer__list']}>
          <li>
            <Link className={styles['car-footer__link']} to="https://github.com/ViktorAfk/cyberoo-test-task" target='_blank'>
              github
            </Link>
          </li>
          <li>
            <Link className={styles['car-footer__link']} to='/contact'>
              contact
            </Link>
          </li>
          <li>
            <Link className={styles['car-footer__link']} to='/rights'>
              rights
            </Link>
          </li>
         </ul>
         <button onClick={scrollToTop} type='button' className={styles['car-footer__go_top']}>
            back to top
         </button>
      </div>
    </footer>
  )
}