import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
    console.log(dogs);
  return (
    <div>
        <h1>Dogs</h1>
        {dogs.map((f, idx) => <Link key={idx} to={`/dogs/${f.src}`}>{f.name}</Link>)}
    </div>
  );
}

export default DogList;