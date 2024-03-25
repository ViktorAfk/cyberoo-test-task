import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
  <div className={styles.notfound}>
    <h2 className={styles.notfound__message}>Oops, this page doesn&apos;t exist. <br /><Link className={styles.notfound__link} to='..'>Go HOME</Link></h2>
  </div>
);
