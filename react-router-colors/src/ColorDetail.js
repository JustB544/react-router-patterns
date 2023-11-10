import React from "react";
import { Link, useParams } from "react-router-dom";

function ColorDetail({colors}) {
    const params = useParams();
    const {name, color} = colors.filter(c => c.name === params.color)[0]
  return (
    <div style={{backgroundColor: color, height: "100%"}}>
      <h1 style={{color: "#FFFFFF"}}>{name}</h1>
      <Link to="/colors" style={{color: "#FFFFFF"}}>Back</Link>
    </div>
  );
}

export default ColorDetail;