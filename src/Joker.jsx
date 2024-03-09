import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";
  const getNewJoke = async () => {
    let response = await fetch(URL);
    let JSONResponse = await response.json();
    setJoke(JSONResponse);
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let JSONResponse = await response.json();
      setJoke(JSONResponse);
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h2>Joker </h2>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
