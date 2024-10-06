import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
// const getJokes = () => {
//   axios
//     .get("https://localhost:5000/joke")
//     .then((res) => {
//       setJokes(res.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/joke")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Chai aur full stack</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.length === 0 ? (
        <button onClick={() => {}}>Get Jokes from backend</button>
      ) : (
        <></>
      )}

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
