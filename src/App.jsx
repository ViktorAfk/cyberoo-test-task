import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import { getRecords } from './api/api';

 export const  App = () => {
  const [carsRecords, setCardsRecords] = useState([]);

  useEffect(() => {
    getRecords()
      .then(data => setCardsRecords(Object.entries(data.data)))
  }, [])

  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
      
  )
}


