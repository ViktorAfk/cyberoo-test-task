import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import cn from 'classnames';
function getLinkClass({ isActive }) {
  return cn(styles['car-header__link'], { [styles['car-header__link--is-active']]: isActive });
}
export const Header = () => {
  return (
    <header className={styles['car-header']}>
  
     <div className={styles['car-header__container']}>
      
      <div className={styles['car-header__container__links']}>
        <NavLink className={getLinkClass} to='/'>
          Home
        </NavLink>
        <NavLink className={getLinkClass} to='cars'>
          Catalog
        </NavLink>
      </div>

      <Link className={styles['car-header__link']} to='form'>Add Car</Link>
     </div>
    </header>
  )
}