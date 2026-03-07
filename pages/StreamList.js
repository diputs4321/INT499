import { useState } from "react";

function StreamList() {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User input:", userInput);
    setUserInput("");
  };

  return (
    <section className="card">
      <h1>Welcome to StreamList</h1>

      <form onSubmit={handleSubmit} className="stream-form">
        <label htmlFor="streamInput">Enter a movie title:</label>
        <input
          id="streamInput"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default StreamList;