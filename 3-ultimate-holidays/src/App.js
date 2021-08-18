import { Fragment } from 'react';
import UltimateHolidayList from './UltimateHolidayList.js';
import UltimateHolidayListWithFilter from './UltimateHolidayListWithFilter.js';
import UltimateHolidayListWithKey from './UltimateHolidayListWithKey.js';
import UltimateList from './UltimateList';

const App = () => (
  <main>
    <UltimateHolidayListWithFilter />
    <UltimateList />
  </main>
);

export default App;
