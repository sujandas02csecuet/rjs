import React from "react";

function App() {

fetch('https://jsonplaceholder.typicode.com/posts')
.then((Response)=>Response.json)
.then((json)=>console.log(json))

  return (
    <div>
      <h1>Let us  Make the world a better place to live</h1>
     
    </div>
  );
}

export default App;
