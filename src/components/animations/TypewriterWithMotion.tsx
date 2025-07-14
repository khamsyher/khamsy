import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
  pause?: number;
}

const InfiniteTypewriter: React.FC<TypewriterProps> = ({ text, speed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let interval: number;

    if (typing) {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, speed);
    }

    return () => clearInterval(interval);
  }, [typing, index, text, speed]);

  useEffect(() => {
    if (typing && index === text.length) {
      const pauseTimeout = setTimeout(() => {
        setTyping(false);
      }, pause);
      return () => clearTimeout(pauseTimeout);
    }

    if (!typing && displayedText === "") {
      setIndex(0);
      setTyping(true);
    }
  }, [typing, index, text.length, displayedText, pause]);

  return (
    <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1 "
      >
        |
      </motion.span>
    </h1>
  );
};

export default InfiniteTypewriter;
