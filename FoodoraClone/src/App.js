import React, { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';
import './App.css';

const App = () => {
  const [currentForm, setCurrentForm] = useState('');

  const toggleForm = (formName) => {
      setCurrentForm(formName);
  }

  return (
    <div className='container'>
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
    </div>
  );
};

export default App;


