import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Instructions for MCQ Test</h1>
      <h2>
        Welcome to the Online MCQ Test Portal! Please read the instructions carefully before starting the test.
      </h2>

      <div className="section-title">General Guidelines:</div>
      <ul>
        <li>Total Questions: 20</li>
        <li>Time Limit: 30 minutes</li>
        <li>Question Type: Multiple Choice Questions (Single correct answer)</li>
        <li>No Negative Marking</li>
      </ul>

      <div className="section-title">Test Rules:</div>
      <ul>
        <li>You can attempt questions in any order.</li>
        <li>Use the Next and Previous buttons to navigate between questions.</li>
        <li>Once selected, you can change your answer before submitting.</li>
        <li>Do not refresh or close the window during the test.</li>
        <li>The test will be automatically submitted once timer runs out.</li>
      </ul>

      <div className="section-title">Important Notes:</div>
      <ul>
        <li>Make sure your internet connection is stable.</li>
        <li>
          Do not switch tabs or open other applications — doing so may result in automatic disqualification.
        </li>
        <li>Ensure your device is fully charged or plugged in before beginning.</li>
        <li>Use Google Chrome or the latest version of any modern browser.</li>
      </ul>

      <button>Start Test</button>

      <div className="footer">Good Luck! 🍀</div>
    </div>
  );
}

export default App;
