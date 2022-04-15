import React, { useState } from "react";

function App() {
  var [user, setUser] = useState("");
  var handler = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={user}
        name="user"
        onChange={handler}
      ></input>
      <br />
      {user}

      <button onClick={()=>alert("this is react js")}>
          Click Here...
      </button>
    </div>
  );
}

export default App;
