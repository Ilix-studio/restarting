import React from "react";

const Events = () => {
  const buttonClick = () => {
    alert("This page is corrupted");
  };
  return <button onClick={buttonClick}>Click Here</button>;
};

export default Events;
