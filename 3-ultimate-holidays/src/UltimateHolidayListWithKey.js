import React from 'react';

const list = [
  {id: 0, name: 'The beach'},
  {id: 1, name: 'The mountains'},
  {id: 2, name: 'Vibrant cities'},
  {id: 3, name: 'Roughing it'},
  {id: 4, name: 'Ultimate survival'},
];

const UltimateHolidayListWithKey = () => {

  // the key prop isn't rendered to the dom, it is only used by react
  return (
    <section>
      <h1>Ultimate Holiday Destinations</h1>
      <ul>
        {
          list.map((listItem, index) => 
            {
              return <li key={listItem.id}>{listItem.name}</li>
            }
          )
        }
      </ul>
    </section>
    );
};

export default UltimateHolidayListWithKey;