import React from "react";

function Student(props) {
  return (
    <div>
      <h2>Hello....{props.name}</h2>
      <h3>Email....{props.email}</h3>
    </div>
  );
} 

export default Student;

