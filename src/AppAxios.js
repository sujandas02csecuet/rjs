import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) =>
      //console.log(response.data)
      setUser(response.data)
    );
  }, []);
  console.warn(users);
  return (
    <div className="App" >
      <h1> get api json todos</h1>
      <Table stripped bordered hover size="sm">
        <tbody>
          <tr>
            <td>user id</td>
            <td>description</td>
            <td>title</td>
          </tr>

          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
