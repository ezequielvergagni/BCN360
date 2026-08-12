import React from 'react';
import { motion, Variants } from 'motion/react';

interface AnimatedWordsProps {
  text: string;
  className?: string;
  highlightText?: string;
  highlightClassName?: string;
  delay?: number;
}

export const AnimatedHeadingWords: React.FC<AnimatedWordsProps> = ({
  text,
  className = "",
  highlightText,
  highlightClassName = "text-blue-600 font-extrabold",
  delay = 0,
}) => {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.06, 
        delayChildren: delay 
      },
    },
  };

  const childVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 18,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 35,
      rotateX: -30,
      filter: "blur(8px)",
    },
  };

  return (
    <motion.div
      className={`inline-flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em] ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => {
        const isHighlighted = highlightText && word.toLowerCase().includes(highlightText.toLowerCase());
        return (
          <motion.span
            key={index}
            variants={childVariants}
            className={`inline-block transform-gpu ${isHighlighted ? highlightClassName : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

interface AnimatedLettersProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  text,
  className = "",
  delay = 0,
}) => {
  const letters = Array.from(text);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block whitespace-pre-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface AnimatedCounterProps {
  target: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, className = "" }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring" as const, stiffness: 100, damping: 15 }}
      className={`inline-block font-bold ${className}`}
    >
      {target}
    </motion.span>
  );
};
