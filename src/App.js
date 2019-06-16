import React from 'react';
import './App.css';
import SubmitForm from './components/SubmitForm';

function App() {
  return (
    <div className="App">
      <h3>Check the vibe!</h3>
      <p>Enter some text and check if its message is positive or negative.</p>
      <SubmitForm />
    </div>
  );
}

export default App;
