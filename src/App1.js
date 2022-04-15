import React, { useState } from "react";

function App() {
  const [data, setData] = useState();

  const apiGet = () => {
    fetch(
      "https://chroniclingamerica.loc.gov/search/pages/results/?andtext=florid&format=json"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  return (
    <div>
      <button onClick={apiGet}>FetchAPI</button>
      <br />
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
