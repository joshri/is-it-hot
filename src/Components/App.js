import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='./' render={() => {
        return <Home />
      }}/>
    </div>
  );
}

export default App;
