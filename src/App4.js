import React from "react";

function App() {
  return (
    <div>
      <h2>Contact</h2>

      <form>
        User Name:
        <input type="text" placeholder="plz enter first name" required />
        <br />
        User Email:{" "}
        <input type="email" placeholder="plz enter ur exact mobile" required />
        <br />
        User Mobile:
        <input type="number" placeholder="pls enter mobile no" required />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
