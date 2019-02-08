import React from 'react';
import './SignInLayout.css'

const SignInLayout = ({ children }) => {
  return(
    <div className="sign-in-wrapper">
      {children}
    </div>
  );
};

export default SignInLayout;