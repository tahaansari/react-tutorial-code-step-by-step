import React, { useEffect, useState } from "react";

function MyUseEffect() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("useEffect hook called");
  }, [counter]);
  return (
    <>
      <h1>MyUseEffect Component</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}

export default MyUseEffect;
