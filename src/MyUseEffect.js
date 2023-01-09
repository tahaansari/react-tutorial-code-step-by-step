import React, { useEffect, useState } from "react";

function MyUseEffect({ data, counter }) {
  // useEffect(() => {
  //   console.log("Called with data state");
  // }, [data]);
  useEffect(() => {
    alert("counter is " + counter);
  }, [counter, data]);

  return (
    <>
      <h1>MyUseEffect Component</h1>
      <h2>{counter}</h2>
      <h2>{data}</h2>
    </>
  );
}

export default MyUseEffect;
