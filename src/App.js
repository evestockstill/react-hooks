import React, { useState } from 'react';

const App = () => {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  return (
    <>
      <div>
        <button
          onClick={() =>
            setCount((currentState) => ({
              ...currentState,
              count: currentState.count + 1
            }))
          }
        >
          increase
        </button>
      </div>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </>
  );
};

export default App;
