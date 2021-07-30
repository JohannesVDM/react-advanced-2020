import React from 'react';

const ErrorExample = () => {
  const titles = [
    'Hello', 'Bye', 'Random', 'Titles', 'Are pretty sweet'
  ]

  let title = 'Random title';
  const handleClick = () => {
    console.log(title);
    title = 'Hello';
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>

      <button type='button' className='btn'
        onClick={handleClick}>Change Title</button>
    </React.Fragment>
  );


};

export default ErrorExample;
