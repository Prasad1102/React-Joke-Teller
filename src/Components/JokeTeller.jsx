import React, { useState } from "react";
import style from "./JokeTeller.module.css";

const JokeTeller = () => {
  const [joke, setJoke] = useState("");
  const fetchJoke = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();
    setJoke(data.joke);
    tellJoke(data.joke);
  };

  const tellJoke = (joke) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = joke;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      <h2 className={style.heading}>Joke Teller</h2>
      <button onClick={fetchJoke} className="btn btn-primary">
        Joke
      </button>
      <p>Hello I am Prasad Shelke</p>
      <div className={style.container}>{joke && <p>{joke}</p>}</div>
    </div>
  );
};

export default JokeTeller;
