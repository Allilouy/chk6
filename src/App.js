import React from 'react';
import './App.css';
import Student from './Student.js';


const me = new Student();
me.getJob("Web developer");

me.learnNewSkill("React");
me.forgetSkill("React");
me.leaveJob();


function App() {
  return (
    <div></div>
  );
}

export default App;
