import React from "react";
import UserCard from "./UserCard";
import Banner from "./Banner";

function App() {
  const user = {
    name: "Abhisek",
    role: "software engineer",
    age: 27,
    profilePic: "image.jpg",
  };

  return (
    <div>
      <UserCard user={user} />
      <Banner/>
    </div>
  );
}

export default App;
