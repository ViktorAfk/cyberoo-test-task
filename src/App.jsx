import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCarsRecords } from './features/carsRecords';

 export const  App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsRecords());
  }, [])

  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}


