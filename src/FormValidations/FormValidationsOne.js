import React, { useState } from "react";

function FormValidationsOne() {
  var [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  var { username, email, password, confirmPassword } = data;

  var submitHandler = (e) => {
    e.preventDefault();
    if (username.length <= 5) {
      alert("user must be at least 5charts");
    } else if (password != confirmPassword) {
      alert("passwords are not matching");
    }
  };

  var changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <br></br>
        <label>User Name: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
        ></input>
        <br />
        <br></br>
        <label>Email : </label>
        <input
          type={"email"}
          name="email"
          value={email}
          onChange={changeHandler}
        ></input>
        <br />
        <br></br>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
        ></input>
        <br />
        <br></br>

        <label>Confirm Password : </label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandler}
        />
        <br />
        <br></br>
        <button name="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidationsOne;
