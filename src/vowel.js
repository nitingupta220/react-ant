import React from "react";
import Highlighter from "react-highlight-words";
import "./App.css";

function isVowel(x) {
  var s = x.split("");
  var result = [];
  for (var i = 0; i < s.length; i++) {
    if (
      s[i] === "A" ||
      s[i] === "E" ||
      s[i] === "I" ||
      s[i] === "O" ||
      s[i] === "U" ||
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      result.push(s[i]);
    }
  }
  return (
    <Highlighter
      highlightClassName="vowel"
      searchWords={result}
      textToHighlight={x}
    />
  );
}

export default isVowel;
