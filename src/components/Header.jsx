import React, { useState } from "react";
import { MdDeleteForever, MdOutlineSpaceBar } from "react-icons/md";

import { RxLetterCaseLowercase, RxLetterCaseUppercase } from "react-icons/rx";
import { FaCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
const Header = () => {
  const [textValue, setTextValue] = useState("");
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
  return (
    <div className="">
      <div className="container" style={{ height: "fit-content" }}>
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
    </div>
  );
};

export default Header;
