import React, { useState } from 'react';

// const UseStateCounter = () => {
//   let [value, setValue] = useState(0);

//   const increaseHandler = () => {
//     //setValue++;

//     setValue(value + 1);
//   }

//   const decreaseHandler = () => {
//     if (value > 0) {
//       setValue(value - 1);
//     }
//   }

//   const resetHandler = () => {
//     setValue(0);
//   }

//   return (
//     <section style={{ margin: '4rem 0' }}>
//       <h2>Regular Counter</h2>
//       <h1>{value}</h1>
//       <button className='btn' onClick={increaseHandler}>Increase</button>

//       <button className='btn' onClick={decreaseHandler}>Decrease</button>

//       <button className='btn' onClick={resetHandler}>Reset</button>

//     </section>
//   );
// };

// OR 

const UseStateCounter = () => {
  let [value, setValue] = useState(0);

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>

        <button className='btn'
          onClick={() => {
            if (value > 0) {
              setValue(value - 1);
            }
          }}>Decrease</button>

        <button className='btn' onClick={() => setValue(0)}>Reset</button>

      </section >
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => {
          setTimeout(() => {
            // BAD METHOD
            // setValue(value + 1);

            //BETTER METHOD
            setValue((prevState) => {
              return prevState + 1;
            });
          }, 1500);
        }}>Increase Later</button>
      </section >
    </>
  );
};

export default UseStateCounter;
