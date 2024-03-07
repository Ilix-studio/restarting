import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Child count={count} onClick={handleClick} />
      <Child count={count} onClick={handleClick} />
    </>
  );
};

export default Parent;
