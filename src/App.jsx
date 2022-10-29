import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Page from './components/Page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
