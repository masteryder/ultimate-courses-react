import React from 'react';

const List = ({records}) => (
  <ul>{
    records.map(r => (
      <li key={r.recordName}>
        <h3>{r.recordName}</h3>
        <p>{r.artistName}</p>
        <p>{r.description}</p>
      </li>))
  }</ul>
);

export default List;