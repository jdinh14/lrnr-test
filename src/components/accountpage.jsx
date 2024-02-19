import React from 'react';
import { flameOutline, appsOutline, personCircleOutline } from 'ionicons/icons';
import '../App.css'; //for hover effect

const Account = () => {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="container">
          <h1 className="text-primary h1">Account</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card card-hover-effect">
              <div className="card-body text-center">
                <h2 className="text-primary"><i className="bi bi-fire"></i></h2>
                <img src={flameOutline} alt="Flame Icon" style={{ maxWidth: '8%', maxHeight: '8%' }}/>
                <p className="h3">Streak</p>
                <p>You have a streak of 5 days!</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card card-hover-effect">
              <div className="card-body text-center">
                <h2 className="text-primary"><i className="bi bi-list"></i></h2>
                <img src={appsOutline} alt="List Icon" style={{ maxWidth: '8%', maxHeight: '8%' }}/>
                <p className="h3">Platinum Quizzes</p>
                <ul className="list-unstyled">
                  <li>golang - intermediate</li>
                  <li>Javascript - beginner</li>
                  <li>AWS - beginner</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card card-hover-effect">
              <div className="card-body text-center">
                <h2 className="text-primary"><i className="bi bi-person"></i></h2>
                <img src={personCircleOutline} alt="Person Icon" style={{ maxWidth: '8%', maxHeight: '8%' }}/>
                <p className="h3">Lrnr Level: 2</p>
                <p>150/200 xp</p>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
      </div>
    </>
  )
}

export default Account;
