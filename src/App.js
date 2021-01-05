import React from 'react';
import './App.css';
import Main from './components/Main'
import { BrowserRouter as Router, Route} from "react-router-dom";
import SingleRecipe from './components/SingleRecipe';

export default function App() {
  return (
    <Router>
      <div className="App" style={{width: "100vw", height: '90vh'}}>
        <Route exact path="/" component={Main}></Route>
        <Route path="/singleRecipe" component={SingleRecipe}></Route>
      </div>
    </Router>
  );
}