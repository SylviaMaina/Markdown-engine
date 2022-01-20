import React from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  const [input, setInput] = React.useState();

  return (
    <div className="App">
      <h1>Markdown Engine</h1>

      <div className="body">
        <textarea
          autoFocus
          className="textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Markdown text here"
        />
        <ReactMarkdown children={input} className="down" />
      </div>
    </div>
  );
}

export default App;
