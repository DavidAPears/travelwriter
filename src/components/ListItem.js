import React from 'react';

const ListItem = (props) => {
  return (
    <div className="list-item">
      <h2>{props.name}</h2>
      <h4>{props.address}</h4>
    </div>
  )
}

export default ListItem;
