import React from 'react';
import { Link } from "react-router-dom";


export default function Result() {
    return (
        <div className="container mt-5 mb-5 text-center" id="index-banner">
            <h1 className="text-primary h1">lrnr</h1>
            <div className="row justify-content-center">
                <p className="h5" id="correctAnswersBlock">Questions Right: 0</p>
            </div>
            <div className="row justify-content-center">
            <Link to="/" className="btn btn-primary btn-lg" id="download-button">
      Try Another Quiz
    </Link>            </div>
            <br /><br />
        </div>
    );
}
