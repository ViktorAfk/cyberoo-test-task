import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCarsRecords } from './features/records/records';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import styles from './App.module.scss';

 export const  App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCarsRecords())
  }, [dispatch])

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.app__main}>
        <div>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
