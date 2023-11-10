import React from "react";
import { Link } from "react-router-dom";

function ColorList({colors}) {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <h1>Colors</h1>
        <Link to='/colors/new'>Add new color</Link>
        {colors.map((c, idx) => <Link key={idx} to={`/colors/${c.name}`}>{c.name}</Link>)}
    </div>
  );
}

export default ColorList;