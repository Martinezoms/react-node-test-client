import React from 'react';
import error from '../../assets/error.png';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className="error__container">
      <div className="error__container-logo">
        <img src={error} alt="Error logo" />
      </div>
      <h2>page not found</h2>
    </div>
  );
};

export default ErrorPage;
