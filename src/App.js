// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lrnrnav from './components/navbar';
import Home from './components/home';
import Account from './components/accountpage';
import QuizGeneration from './components/quizgeneration';
import Footer from './components/footer';
import Quiz from './components/quiz';
import Error from './components/errorpage';
import Result from './components/results';


function App() {
  return (
    <Router>
      <div>
        <Lrnrnav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/quiz-generation" element={<QuizGeneration />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


