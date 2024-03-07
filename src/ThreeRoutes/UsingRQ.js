import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const UsingRQ = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );
  if (isLoading) return <h2>Loading ...</h2>;
  if (isError) return <h3>{error.message}</h3>;

  return (
    <>
      <h2>Using React Query </h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default UsingRQ;
