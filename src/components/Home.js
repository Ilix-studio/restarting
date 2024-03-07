import React from "react";

const user = {
  name: "ilix",
  age: 26,
  address: "Golaghat",
};

const Home = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.address}</p>
    </>
  );
};

export default Home;
