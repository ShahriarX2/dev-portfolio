"use client";

import { createElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./TextType.css";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const observerRef = useRef(null);
  const timeoutRef = useRef(null);
  const hasStartedRef = useRef(false);
  const onSentenceCompleteRef = useRef(onSentenceComplete);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const textColorsMemo = useMemo(() => textColors, [textColors]);
  const longestText = useMemo(() => {
    return textArray.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, "");
  }, [textArray]);

  useEffect(() => {
    onSentenceCompleteRef.current = onSentenceComplete;
  }, [onSentenceComplete]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed?.enabled) return typingSpeed;
    const min = variableSpeed.min ?? typingSpeed;
    const max = variableSpeed.max ?? typingSpeed;
    return Math.random() * (max - min) + min;
  }, [typingSpeed, variableSpeed]);

  const currentTextColor = useMemo(() => {
    if (textColorsMemo.length === 0) return "inherit";
    return textColorsMemo[currentTextIndex % textColorsMemo.length];
  }, [currentTextIndex, textColorsMemo]);

  useEffect(() => {
    if (!startOnVisible || !observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const currentText = textArray[currentTextIndex] ?? "";
    const processedText = reverseMode ? currentText.split("").reverse().join("") : currentText;

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      timeoutRef.current = window.setTimeout(() => {
        setDisplayedText(processedText.slice(0, 1));
        setCurrentCharIndex(1);
      }, initialDelay);
      return () => window.clearTimeout(timeoutRef.current);
    }

    if (!isDeleting && currentCharIndex < processedText.length) {
      timeoutRef.current = window.setTimeout(() => {
        const nextIndex = currentCharIndex + 1;
        setDisplayedText(processedText.slice(0, nextIndex));
        setCurrentCharIndex(nextIndex);
      }, getRandomSpeed());

      return () => window.clearTimeout(timeoutRef.current);
    }

    if (!isDeleting && currentCharIndex >= processedText.length) {
      if (!loop && currentTextIndex === textArray.length - 1) return;

      timeoutRef.current = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);

      return () => window.clearTimeout(timeoutRef.current);
    }

    if (isDeleting && displayedText.length > 0) {
      timeoutRef.current = window.setTimeout(() => {
        const nextText = displayedText.slice(0, -1);
        setDisplayedText(nextText);
        setCurrentCharIndex(nextText.length);
      }, deletingSpeed);

      return () => window.clearTimeout(timeoutRef.current);
    }

    if (isDeleting && displayedText.length === 0) {
      onSentenceCompleteRef.current?.(textArray[currentTextIndex], currentTextIndex);

      if (currentTextIndex === textArray.length - 1 && !loop) {
        return;
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        setCurrentCharIndex(0);
      }, pauseDuration / 3);

      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    getRandomSpeed,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    ((textArray[currentTextIndex]?.length ?? 0) > currentCharIndex || isDeleting);

  return createElement(
    Component,
    {
      className: `text-type ${className}`,
      ...props,
    },
    <span className="text-type__inner">
      <span className="text-type__measure" aria-hidden="true">
        <span className="text-type__content">{longestText}</span>
        {showCursor && <span className="text-type__cursor text-type__cursor--placeholder">{cursorCharacter}</span>}
      </span>
      <span className="text-type__live">
        <span ref={observerRef} className="text-type__content" style={{ color: currentTextColor }}>
          {displayedText}
        </span>
        {showCursor && (
          <span
            className={`text-type__cursor ${cursorClassName} ${shouldHideCursor ? "text-type__cursor--hidden" : ""}`}
            style={{ "--text-type-cursor-blink-duration": `${cursorBlinkDuration}s` }}
          >
            {cursorCharacter}
          </span>
        )}
      </span>
    </span>
  );
};

export default TextType;
