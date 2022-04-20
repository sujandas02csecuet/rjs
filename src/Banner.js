import React from "react";

function Banner(props) {
  const name = props.name || "user";
  return <div>Hello {name}</div>;
}

export default Banner;
