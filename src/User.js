import React from "react";

function User(props, ref) {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
}

export default React.forwardRef(User);
