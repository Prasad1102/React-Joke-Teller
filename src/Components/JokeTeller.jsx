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
      <button onClick={fetchJoke} className="btn btn-primary">
        Joke
      </button>
<<<<<<< HEAD
      <div className="container">{joke && <p>{joke}</p>}</div>
=======
      <div className={style.container}>{joke && <p>{joke}</p>}</div>
>>>>>>> ddc52b9c48fb39599262ff5a218a6c1d010ce2c3
    </div>
  );
};

export default JokeTeller;
