import React, {useState} from 'react';

const list = [
  {id: 0, name: 'The beach', topLocation: true},
  {id: 1, name: 'The mountains', topLocation: false},
  {id: 2, name: 'Vibrant cities', topLocation: true},
  {id: 3, name: 'Roughing it', topLocation: false},
  {id: 4, name: 'Ultimate survival', topLocation: false},
];

const UltimateHolidayListWithFilter = () => {
  const [showAll, setShowAll] = useState(true);
  const toggleShowHandler = () => {
    setShowAll(s => !s);
  }

  return (
    <section>
      <h1>Ultimate Holiday Destinations</h1>

      <ul>
        {/*{ showAll ? 
          list.map((listItem, index) => {
            return <li key={listItem.id}>{listItem.name}</li>
          }) : 
          list.filter((listItem) => {
            return listItem.topLocation;
          }).map((listItem, index) => {
            return <li key={listItem.id}>{listItem.name}</li>
          })
        } */
        list.filter(item => (showAll ? true : item.topLocation))
            .map((listItem, index) => {
              return <li key={listItem.id}>{listItem.name}</li>
            })
        }
      </ul>

      <input type="radio" name="radios-show" value={true} id="radio-show-all" checked={showAll} onChange={toggleShowHandler}/>
      <label htmlFor="radio-show-all">Show all</label>

      <input type="radio" name="radios-show" value={false} id="radio-show-top" checked={!showAll} onChange={toggleShowHandler}/>
      <label htmlFor="radio-show-top">Show only Top Destinations</label>

    </section>
    );
};

export default UltimateHolidayListWithFilter;