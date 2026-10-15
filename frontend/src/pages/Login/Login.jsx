import React, { useState } from 'react'
import LoginEmail from './loginComponents/LoginEmail'
import JoinDev from './loginComponents/JoinDev';

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    if (!isLoggedIn) return <JoinDev handleEvent={setIsLoggedIn}/>;

    return <LoginEmail handleEvent={setIsLoggedIn}/>;
   
  
};

export default Login