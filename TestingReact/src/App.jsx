import { useState } from "react";
function App() {
  const [word, setWord] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
        style={{ color: "white", backgroundColor: "black" }}
      />
      <h1>{word}</h1>
    </>
  );
}

export default App;
