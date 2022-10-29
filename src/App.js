import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import News from './components/pages/News';

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
