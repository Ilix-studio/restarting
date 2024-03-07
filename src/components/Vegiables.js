import React from "react";
const vegs = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const Vegiables = () => {
  const vegitablesList = vegs.map((veg) => <li key={veg.id}>{veg.title}</li>);
  return <ul>{vegitablesList}</ul>;
};

export default Vegiables;
