// import React from 'react'
import { useState, useEffect } from "react";
import "../quiz.css";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [grade, setGrade] = useState("");
  const [submitValidation, setSubmitValidation] = useState('')

  // console.log(localStorage)
  const questions = JSON.parse(localStorage.getItem("content"));
  console.log(questions);
  const filteredQuestions = questions.split("~~");

  const updateQuestion = (event) => {
    event.preventDefault();
    setGrade("");
    setSubmitValidation('')
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === filteredQuestions.length - 1) {
      setCurrentQuestion(0);
      window.location.href = "/results";
    }
    document.querySelector("input").value = "";
  };

  const checkAnswer = (event) => {
    event.preventDefault();
    const question = filteredQuestions[currentQuestion];
    const answer = document.querySelector("input").value;

    if (answer === '') {
      setSubmitValidation('Oops! Please make sure to enter a response!') 
      setGrade('')
    } else if (answer !== ''){
      setSubmitValidation('')
      fetch(`http://localhost:6747/grade?question=${question}&answer=${answer}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.content);
        setGrade(data.content);
      });
    }
    
  };

  return (
    <div className="quiz-box">
      {filteredQuestions.map((question, index) => {
        if (index === currentQuestion) {
          return (
            <div key={`question-${index}`}>
              <p>
                {currentQuestion + 1}/{filteredQuestions.length}
              </p>
              <h1>{question}</h1>
            </div>
          );
        }
      })}

      <input type="text" placeholder="Answer" />
      <button class="text-light bg-primary" onClick={checkAnswer}>
        Submit
      </button>
      {submitValidation}
      {grade && (
      <div>
        <p>{grade.startsWith("no") ? "Incorrect" : "Correct"}</p>
        <p>{grade}</p>
      </div>
    )}
    {grade && (
      <button className="text-light bg-primary" onClick={updateQuestion}>
        Next
      </button>
    )}
    </div>
  );
}
