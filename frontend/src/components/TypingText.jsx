import React, { useState, useEffect } from "react";

export default function TypingText({
  words = [],
  speed = 50, // typing speed per character (ms)
  deleteSpeed = 25, // deleting speed per character (ms)
  pause = 900, // pause after typing full word (ms)
  color = "text-indigo-600",
  fontSize = "text-3xl", // Tailwind font size class
  beginChar = "> ",
}) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(
          () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
          speed,
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // Deleting
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(currentWord.slice(0, displayed.length - 1)),
          deleteSpeed,
        );
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span className={`relative ${color} font-mono ${fontSize}`}>
      <span>
        {beginChar} {displayed}
      </span>
      <span className="inline-block w-[1px] h-6 bg-current ml-1 animate-blink"></span>
      <style jsx>{`
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </span>
  );
}
