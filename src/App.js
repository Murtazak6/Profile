import React from 'react';
import './App.css';
import Profile from './Component/Profile'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function App() {
  return (
    <div className="App">
        <ToastContainer />
        <Profile />
    </div>
  );
}

export default App;
