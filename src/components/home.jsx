// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { flashOutline, trophyOutline, personCircleOutline } from 'ionicons/icons';
import '../App.css'; //for hover effect




const Home = () => {
  return <div>

     
    

      <div class="container mt-3 mb-3">
    <div class="container">
    
    <Link to="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={Logo} alt="website homepage" style={{ maxWidth: '40%', maxHeight: '40%' }} />
    </Link>


        <div class="row text-center">
            <p class="h5 col-12">Your guided path to programming enlightenment</p>
        </div>
        <div class="row text-center">
            <Link to="/quiz-generation" className="btn btn-primary btn-sm" onclick="login()">Begin Journey</Link>
        </div>
    </div>
</div>


<div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card card-hover-effect text-center">
            <div className="card-body">
              <h2 className="text-primary"><i className="bi bi-lightning-charge-fill"></i></h2>
              <img src={flashOutline} alt="Heart Icon" style={{ maxWidth: '8%', maxHeight: '8%' }}/>
              <p className="h5">Personalized Quizzes</p>
              <p>Greetings, young padawan. Are you ready to embark on a journey of personalized enlightenment through the art of coding? Our app can create custom quizzes that align with your coding skills and interests...</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card card-hover-effect text-center">
            <div className="card-body">
              <h2 className="text-primary"><i className="bi bi-currency-dollar"></i></h2>
              <img src={trophyOutline} alt="Trophy Icon" style={{ maxWidth: '8%', maxHeight: '8%' }}/>
              <p className="h5">Rewarding</p>
              <p>Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process...</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card card-hover-effect text-center">
            <div className="card-body">
              <h2 className="text-primary"><i className="bi bi-person-fill"></i></h2>
              <img src={personCircleOutline} alt="Person Icon" style={{ maxWidth: '8%', maxHeight: '8%' }}/>
              <p className="h5">Personal SME</p>
              <p>Welcome to the path of knowledge. Our app is like having a personal subject matter expert at your side...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5 how-it-works-section">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">How It Works</h2>
            <div className="text-center">
              <p>Creating your personalized quiz is easy and intuitive. Follow these simple steps:</p>
              <ol className="list-unstyled">
                <li className="mb-2"><strong>Pick a Topic:</strong> Choose from a wide range of topics we offer.</li>
                <li className="mb-2"><strong>Select Difficulty Level:</strong> Tailor the quiz to your knowledge level, whether beginner, intermediate, or expert.</li>
                <li className="mb-2"><strong>Choose Number of Questions:</strong> Decide how many questions you want to tackle.</li>
                <li className="mb-2"><strong>Style of Portrayal:</strong> Select how you'd like the questions to be presented.</li>
                <li className="mb-2"><strong>Quiz Generation:</strong> Our AI will create a personalized quiz based on your choices.</li>
              </ol>
              <p>Start your journey to mastering new skills through personalized quizzes tailored just for you!</p>
            </div>
          </div>
        </div>
      </div>
  </div>;
};

export default Home;
