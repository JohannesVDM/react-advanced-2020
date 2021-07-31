import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  //alternative is not importing useState and adding React.useState...
  const [people, setPeople] = useState(data); //data = arr  //setPeople = function
  const [text, setText] = useState('Clear People');
  const [people, removeSpecific] = useState(data);

  const buttonHandler = () => {
    setPeople([]);
    setText('Revert');

    if (text === 'Revert') {
      setPeople(data);
      setText('Clear People');
    }
  }

  const removeSpecific = (id) => {
    console.log(id);
  }

  return (
    <>
      {
        people.map((person) => {
          const { id, name } = person;
          return <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={removeSpecific(id)}>Remove Item</button>
          </div>
        })
      }
      <button className='btn' styles='padding-bottom: 12px' onClick={buttonHandler}>{text}</button>
    </>
  )
};

export default UseStateArray;

const album = '';
album.addEventListener('hover')