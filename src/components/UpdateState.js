import { useState } from "react";

const UpdateState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button className="buttom" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
};

export default UpdateState;
