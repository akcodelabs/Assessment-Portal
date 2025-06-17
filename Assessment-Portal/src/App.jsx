import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";

function App() {
  const [showForgot, setShowForgot] = useState(false);

  return (
    <div className="App">
      {showForgot ? (
        <ForgotPassword onBackToLogin={() => setShowForgot(false)} />
      ) : (
        <LoginPage onForgotPassword={() => setShowForgot(true)} />
      )}
    </div>
  );
}

export default App;