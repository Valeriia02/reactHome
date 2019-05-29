import React from 'react';
import logo from './logo.svg';
import './App.css';
import PredictionCreater from './components/PredictionViewer'
import PredictionViewer from './components/PredictionViewer';
function App() {
  return (
    <div className="App">
      <PredictionViewer prediction={['Love','Money','Party']}/>
    </div>
  );
}

export default App;
