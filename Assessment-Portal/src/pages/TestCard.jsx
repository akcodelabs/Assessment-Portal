import React, { useState, useEffect } from 'react';
import './TestCard.css';
import logo from "../assets/images/akcodelablogo.png";

const questions = [
  { q: "Which of the following country has largest population?", options: ["BRAZIL", "GERMANY", "INDONESIA", "RUSSIA"] },
  { q: "What is the capital of India?", options: ["MUMBAI", "DELHI", "KOLKATA", "CHENNAI"] },
  { q: "Which planet is known as the Red Planet?", options: ["VENUS", "MARS", "JUPITER", "SATURN"] },
  { q: "Which element has the chemical symbol 'O'?", options: ["OXYGEN", "GOLD", "SILVER", "IRON"] },
  { q: "What is the currency of Japan?", options: ["DOLLAR", "EURO", "YEN", "WON"] },
  { q: "Which language is used to create web pages?", options: ["HTML", "PYTHON", "JAVA", "C++"] },
  { q: "Who wrote 'Romeo and Juliet'?", options: ["SHAKESPEARE", "TOLSTOY", "HOMER", "TAGORE"] },
  { q: "What is the boiling point of water?", options: ["90°C", "100°C", "80°C", "120°C"] },
  { q: "Which gas do plants absorb?", options: ["OXYGEN", "NITROGEN", "CARBON DIOXIDE", "HYDROGEN"] },
  { q: "Who is the father of computer?", options: ["EINSTEIN", "CHARLES BABBAGE", "NEWTON", "TESLA"] }
];

function TestCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("⏰ Time's up!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="quiz-wrapper">
      <div className="page-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="quiz-header">
        <div className="mcq-title">MCQ Quiz</div>
        <div className={`timer ${timeLeft <= 60 ? "red-blink" : ""}`}>
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="quiz-box">
        <div className="question">{questions[currentIndex].q}</div>
        <div className="options-container">
          {questions[currentIndex].options.map((opt, i) => (
            <button key={i} className="option-btn">{opt}</button>
          ))}
        </div>
      </div>

      <div className="quiz-footer">
        {currentIndex > 0 && (
          <button onClick={() => setCurrentIndex(currentIndex - 1)} className="nav-btn orange">← previous</button>
        )}
        {currentIndex < questions.length - 1 && (
          <button onClick={() => setCurrentIndex(currentIndex + 1)} className="nav-btn green right-align">Next →</button>
        )}
      </div>
    </div>
  );
}

export default TestCard;
