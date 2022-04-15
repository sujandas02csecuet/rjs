import React, { useState } from "react";

function App() {
  return (
    <div>
      <label for="fname">First name:</label><br/>
      <input type="text" id="fname" name="fname" value="John" readonly><br/>
        {" "}
      </input>
      <label for="lname">Last name:</label><br/>
      <input type="text" id="lname" name="lname" value="Doe"></input><br/>
    </div>
  );
}

export default App;
