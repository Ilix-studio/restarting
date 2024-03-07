import React from "react";

const Child = ({ count, onClick }) => {
  return (
    <>
      <button onClick={onClick}>Clicks are count {count} here</button>
    </>
  );
};

export default Child;
