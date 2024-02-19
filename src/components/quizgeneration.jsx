// src/components/QuizGeneration.js
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../qg.css'
import Loading from '../loadinglogo.png';

const QuizGeneration = () => {
  const [formData, setFormData] = useState({
    topic: 'golang',
    expertise: 'novice',
    numQuestions: 5,
    style: 'normal',
  });
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState(null);
  
 


  const generateQuiz = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    const response = await fetch(`http://localhost:6747/ask?length=${formData.numQuestions}&topic=${formData.topic}&expertise=${formData.expertise}&style=${formData.style}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        console.log('Creating Quiz...');
        localStorage.clear();
        const questions = JSON.stringify(data.content);
        console.log(questions);
        localStorage.setItem('content', JSON.stringify(data.content));
        window.location.href = '/quiz';
      });
  };



  return (
    <div>
      <div>
        <h2 className='Qgpage'>{quiz ? quiz.title : 'Quiz Generation Options'}</h2>
        <p className='Qgpage'>Please choose your preferences below to generate your personalized quiz</p>
      </div>
      {loading ? (
        <div className='loading-text'>
          <h3>Loading...</h3>
          <img src= {Loading} alt='loading img' className='loadinglogo'></img>
        </div>
      ) : (
      <div>
          <form className="bg-primary" onSubmit={generateQuiz}>
            <label>
              Topic:
              <Form.Select name="topic" onChange={(e) => setFormData({ ...formData, topic: e.target.value })} value={formData.topic}>
                {['golang', 'aws', 'javascript', 'CI/CD', 'home gardens', 'coffee', 'finger foods', 'animals'].map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </Form.Select>
            </label><br />
            <label>
              Expertise:
              <Form.Select name="expertise" onChange={(e) => setFormData({ ...formData, expertise: e.target.value })} value={formData.expertise}>
                {['novice', 'intermediate', 'expert'].map((exp) => (
                  <option key={exp} value={exp}>{exp}</option>
                ))}
              </Form.Select>
            </label><br />
            <label>
              Number of Questions:
              <Form.Select name="numQuestions" onChange={(e) => setFormData({ ...formData, numQuestions: parseInt(e.target.value) })} value={formData.numQuestions}>
                {[5, 10, 15].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </Form.Select>
            </label><br />
            <label>
              Style of Questions:
              <Form.Select  name="style" onChange={(e) => setFormData({ ...formData, style: e.target.value })} value={formData.style}>
                {['normal', "1940's gangster", 'like im an 8 year old', 'master oogway', 'jedi', 'captain jack sparrow', 'matthew mcconaughey'].map((style) => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </Form.Select>
            </label><br />
            <button className="bg-dark" type="submit">Generate Quiz</button>
          </form>
        </div>
      )}
    </div>
  );}
  
  export default QuizGeneration;