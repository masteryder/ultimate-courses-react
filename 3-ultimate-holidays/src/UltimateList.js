import React, {useState} from 'react';

const sourceObj = {
  val1: 'value 1',
  val2: 'value 2',
  val3: 'value 3',
  val4: 'value 4'
};

const UltimateList = () => {

  return (
    <section>
      <h1>Ultimate Object Listing</h1>

      <ol>
        {
          Object.keys(sourceObj).map( key => (
              <li key={key}>{sourceObj[key]}</li>
          ) )
        }
      </ol>

    </section>
    );
};

export default UltimateList;