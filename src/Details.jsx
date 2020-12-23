import React from "react";
import "./styles.css";

export default function Details({ student }) {
  return (
    <div className="details">
      <h1>{student.name}</h1>
      <h3>{student.id}</h3>
      <h2>{student.hobby}</h2>
    </div>
  );
}
