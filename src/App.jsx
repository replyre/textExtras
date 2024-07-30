import React, { useState, useEffect } from "react";
import "./App.css";
// import { BsAlphabetUppercase } from "react-icons/bs";
import { MdDeleteForever, MdOutlineSpaceBar } from "react-icons/md";

import { RxLetterCaseLowercase, RxLetterCaseUppercase } from "react-icons/rx";
import { FaCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [textValue, setTextValue] = useState("");
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  function Calc(txt) {
    const cleanText = txt.replace(/[^\w\s]/g, "");

    // Split text into words
    const words = cleanText.split(/\s+/).filter((word) => word.length > 0);

    // Count words
    const wordCount = words.length;

    // Count characters including spaces
    const charCountWithSpaces = txt.length;

    // Count characters excluding spaces
    const charCountWithoutSpaces = txt.replace(/\s/g, "").length;

    // Find the most used words
    const wordFrequency = {};
    words.forEach((word) => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    const sortedWords = Object.keys(wordFrequency).sort(
      (a, b) => wordFrequency[b] - wordFrequency[a]
    );
    const mostUsedWords = sortedWords
      .slice(0, 3)
      .map((word) => ({ word, count: wordFrequency[word] }));

    document.querySelector(".words").innerHTML = wordCount;
    document.querySelector(".spaces").innerHTML =
      charCountWithSpaces - charCountWithoutSpaces;
    document.querySelector(".character").innerHTML = charCountWithSpaces;
    document.querySelector(".most-used").innerHTML = mostUsedWords
      .map((e) => `<span>${e.word}</span>`)
      .join(" ");
  }
  console.log(textValue);
  return (
    <div className="App">
      <nav>
        <div>TextExtras</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 24.984375 3.9863281 A 1.0001 1.0001 0 0 0 24 5 L 24 11 A 1.0001 1.0001 0 1 0 26 11 L 26 5 A 1.0001 1.0001 0 0 0 24.984375 3.9863281 z M 10.888672 9.890625 A 1.0001 1.0001 0 0 0 10.193359 11.607422 L 14.392578 15.806641 A 1.0001 1.0001 0 1 0 15.806641 14.392578 L 11.607422 10.193359 A 1.0001 1.0001 0 0 0 10.888672 9.890625 z M 39.080078 9.890625 A 1.0001 1.0001 0 0 0 38.392578 10.193359 L 34.193359 14.392578 A 1.0001 1.0001 0 1 0 35.607422 15.806641 L 39.806641 11.607422 A 1.0001 1.0001 0 0 0 39.080078 9.890625 z M 25 15 A 1.0001 1.0001 0 0 0 24.900391 15.003906 A 1.0001 1.0001 0 0 0 24.800781 15.017578 A 1.0001 1.0001 0 0 0 24.591797 15.082031 C 21.997611 15.191772 19.639402 16.21216 17.925781 17.925781 C 16.117449 19.734126 15 22.233333 15 25 C 15 30.533333 19.466667 35 25 35 C 29.15 35 32.699219 32.487109 34.214844 28.896484 C 34.720052 27.699609 35 26.383333 35 25 C 35 20.85 32.487109 17.300781 28.896484 15.785156 C 27.82556 15.333112 26.634837 15.134077 25.410156 15.082031 A 1.0001 1.0001 0 0 0 25.363281 15.0625 A 1.0001 1.0001 0 0 0 25.169922 15.011719 A 1.0001 1.0001 0 0 0 25.070312 15.001953 A 1.0001 1.0001 0 0 0 25 15 z M 5 24 A 1.0001 1.0001 0 1 0 5 26 L 11 26 A 1.0001 1.0001 0 1 0 11 24 L 5 24 z M 39 24 A 1.0001 1.0001 0 1 0 39 26 L 45 26 A 1.0001 1.0001 0 1 0 45 24 L 39 24 z M 15.080078 33.890625 A 1.0001 1.0001 0 0 0 14.392578 34.193359 L 10.193359 38.392578 A 1.0001 1.0001 0 1 0 11.607422 39.806641 L 15.806641 35.607422 A 1.0001 1.0001 0 0 0 15.080078 33.890625 z M 34.888672 33.890625 A 1.0001 1.0001 0 0 0 34.193359 35.607422 L 38.392578 39.806641 A 1.0001 1.0001 0 1 0 39.806641 38.392578 L 35.607422 34.193359 A 1.0001 1.0001 0 0 0 34.888672 33.890625 z M 24.984375 37.986328 A 1.0001 1.0001 0 0 0 24 39 L 24 45 A 1.0001 1.0001 0 1 0 26 45 L 26 39 A 1.0001 1.0001 0 0 0 24.984375 37.986328 z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path d="M256,0C114.616,0,0,114.616,0,256s114.616,256,256,256s256-114.616,256-256C370.616,256,256,141.384,256,0z" />
                </g>
              </g>
            </svg>
          )}
        </button>
      </nav>
      <div className="container">
        <h2>Text Writer | Word Couter | Character Counter | Extra Features</h2>
        <textarea
          name=""
          id=""
          placeholder="Enter your text Here..."
          onChange={(e) => {
            Calc(e.target.value);
            setTextValue(e.target.value);
          }}
        ></textarea>
        <div className="buttons">
          <button
            onClick={() => {
              document.querySelector("textarea").value = document
                .querySelector("textarea")
                .value.toUpperCase();

              Calc(document.querySelector("textarea").value);
            }}
          >
            <RxLetterCaseUppercase />
          </button>
          <button
            onClick={() => {
              document.querySelector("textarea").value = document
                .querySelector("textarea")
                .value.toLowerCase();

              Calc(document.querySelector("textarea").value);
            }}
          >
            <RxLetterCaseLowercase />
          </button>
          <button
            style={{ background: "red" }}
            onClick={() => {
              document.querySelector("textarea").value = "";

              Calc(document.querySelector("textarea").value);
            }}
          >
            <MdDeleteForever style={{ fill: "white" }} />
          </button>
          <button>
            <CopyToClipboard text={textValue}>
              <FaCopy style={{ fill: "white" }} />
            </CopyToClipboard>
          </button>
          <button
            onClick={() => {
              document.querySelector("textarea").value = document
                .querySelector("textarea")
                .value.replace(/\s+/g, " ")
                .trim();

              Calc(document.querySelector("textarea").value);
            }}
          >
            <MdOutlineSpaceBar style={{ fill: "white" }} />{" "}
          </button>
        </div>
        <div>
          <h2>Summary of your Text</h2>
          <p>
            No. of words: <span className="words">0</span>
          </p>
          <p>
            No. of Character: <span className="character">0</span>
          </p>
          <p>
            No. of White Spaces: <span className="spaces">0</span>
          </p>
          <p>
            Most used Words: <span class="most-used">---</span>
          </p>
        </div>
      </div>
      <div className="footer">
        built with 💗 by <a href="https://github.com/replyre">replyre</a>
      </div>
    </div>
  );
};

export default App;
