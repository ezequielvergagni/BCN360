import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, Variants } from 'motion/react';

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
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  target, 
  className = "",
  duration = 2000 
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Parse target upfront for initial display
  const parseTarget = (str: string) => {
    let prefix = "";
    let suffix = "";
    let numStr = str;

    const prefixMatch = str.match(/^([^\d.,]+)/);
    if (prefixMatch) {
      prefix = prefixMatch[1];
      numStr = str.slice(prefix.length);
    }

    const suffixMatch = numStr.match(/([^\d.,]+)$/);
    if (suffixMatch) {
      suffix = suffixMatch[1];
      numStr = numStr.slice(0, numStr.length - suffix.length);
    }

    let isThousandsDot = false;
    let decimals = 0;
    let targetNum = 0;

    if (numStr.includes(".") && numStr.split(".")[1].length === 3) {
      isThousandsDot = true;
      targetNum = parseFloat(numStr.replace(/\./g, ""));
    } else if (numStr.includes(".")) {
      const parts = numStr.split(".");
      decimals = parts[1].length;
      targetNum = parseFloat(numStr);
    } else if (numStr.includes(",")) {
      if (numStr.split(",")[1].length === 3) {
        isThousandsDot = true;
        targetNum = parseFloat(numStr.replace(/,/g, ""));
      } else {
        const parts = numStr.split(",");
        decimals = parts[1].length;
        targetNum = parseFloat(numStr.replace(",", "."));
      }
    } else {
      targetNum = parseFloat(numStr) || 0;
    }

    const zeroFormatted = decimals > 0 ? (0).toFixed(decimals) : "0";
    return { prefix, suffix, targetNum, decimals, isThousandsDot, initialValue: `${prefix}${zeroFormatted}${suffix}` };
  };

  const parsed = parseTarget(target);
  const [displayValue, setDisplayValue] = useState<string>(parsed.initialValue);

  useEffect(() => {
    if (!isInView) return;

    const { prefix, suffix, targetNum, decimals, isThousandsDot } = parsed;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out cubic for smooth slowing down at end
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = easeProgress * targetNum;

      let formattedNum = "";
      if (decimals > 0) {
        formattedNum = currentNum.toFixed(decimals);
      } else if (isThousandsDot) {
        const rounded = Math.round(currentNum);
        formattedNum = rounded.toLocaleString("es-ES");
      } else {
        formattedNum = Math.round(currentNum).toString();
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateNumber);
      }
    };

    animationFrameId = requestAnimationFrame(animateNumber);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
      className={`inline-block font-bold ${className}`}
    >
      {displayValue}
    </motion.span>
  );
};
