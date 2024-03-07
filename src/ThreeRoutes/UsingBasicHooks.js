import axios from "axios";
import { useEffect, useState } from "react";

const UsingBasicHooks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  });
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      <h2>Bacic Hooks System</h2>
      {data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};

export default UsingBasicHooks;
