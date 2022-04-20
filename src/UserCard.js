import React from "react";

function UserCard(props) {
  const name = props.user.name;

  const role = props.user.role;
  const age = props.user.age;
  const profilePic = props.user.profilePic;

  return (

    <div>

        Name: {name}<br/>
        Role: {role}<br/>
        Age: {age}<br/>
        <img src={profilePic} alt={name}></img>
    </div>
  )
}

export default UserCard;
