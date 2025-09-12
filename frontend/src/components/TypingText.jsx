import React, { useState, useEffect } from "react";

export default function TypingText({
  words,
  speed = 120,       // typing speed per character
  pause = 1000,      // pause at the end of each word
  color = "text-indigo-600",
  cursorBlink = 500, // blink speed in ms
}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typing & deleting effect
  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[index];
    let timeout;

    if (deleting) {
      if (subIndex > 0) {
        timeout = setTimeout(() => {
          setSubIndex(subIndex - 1);
          setText(currentWord.slice(0, subIndex - 1));
        }, speed / 2);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (subIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setSubIndex(subIndex + 1);
          setText(currentWord.slice(0, subIndex + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, speed, pause]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlink);
    return () => clearInterval(cursorInterval);
  }, [cursorBlink]);

  return (
    <span className={`flex items-center gap-1 font-bold text-2xl md:text-4xl ${color}`}>
      <span>{text}</span>
      <span className="inline-block w-[1ch]">
        {showCursor ? "|" : " "}
      </span>
    </span>
  );
}
