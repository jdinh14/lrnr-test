import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { alertCircle } from 'ionicons/icons';


function Error() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h1 className="mt-5">404 Not Found!</h1>
                    <img src={alertCircle} alt="Alert Icon" style={{ maxWidth: '20%', maxHeight: '20%' }} />
                    <p className="lead">Oops! The page you're looking for doesn't exist.</p>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Error;
