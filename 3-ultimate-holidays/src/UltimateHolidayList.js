import React from 'react';

const list = [
  'The beach',
  'The mountains',
  'Vibrant cities',
  'Roughing it',
  'Ultimate survival',
];

// this implementation gives an warning in the console.
// because the React reconciler might have trouble to update the content correctly because of this
const UltimateHolidayList = () => {
  return (
    <section>
      <h1>Ultimate Holiday Destinations</h1>
      <ul>
        {
          list.map(listItem => 
            {
              return <li>{listItem}</li>
            }
          )
        }
      </ul>
    </section>
    );
};

export default UltimateHolidayList;