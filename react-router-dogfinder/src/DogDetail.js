import React from "react";
import { useParams } from "react-router";

function DogDetail({dogs}) {
    const params = useParams();
    const {name, age, src, facts} = dogs.filter(d => d.src === params.name)[0];
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <img src={`/${src}.jpg`} alt={name}/>
      <h3>Facts:</h3>
      <ul>
        {facts.map((f, idx) => <li key={idx}>{f}</li>)}
      </ul>
    </div>
  );
}

export default DogDetail;