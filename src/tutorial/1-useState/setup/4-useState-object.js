import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  // or

  // const [name, setName] = useState('Peter');
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState('state message');

  const changeMessage = () => {
    if (person.message === 'random message') {
      setPerson({ ...person, age: 25, message: 'hello world' });
      // setPerson({ ...person, age: '23' });
    } else {
      setPerson({ ...person, message: 'random message' });
      //age will stay 25
    };
    //or
    //setMessage('Hello world');
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>Change me</button>
    </>

  );
};

export default UseStateObject;
