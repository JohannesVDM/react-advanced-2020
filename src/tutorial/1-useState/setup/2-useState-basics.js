import React, { useState } from 'react';
//{{{{{{important}}}}}}
// useState ~ function 

const UseStateBasics = () => {
  //should be invoked in function body
  const [text, setText] = useState('First Title');

  const clickHandler = () => {
    if (text === 'First Title') {
      setText('Second Title');
    } else if (text === 'Second Title') {
      setText('third Title');
    } else if (text === 'third Title') {
      setText('fourth Title');
    } else if (text === 'fourth Title') {
      setText('fifth Title');
    } else if (text === 'fifth Title') {
      setText('First Title');
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' onClick={clickHandler}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
