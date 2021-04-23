// import PropTypes from 'prop-types';
// import logo from './logo.svg';
import React from 'react'
import './App.css';
import {MoviesList} from './movies/MoviesList'
import {MovieDetail} from './movies/MovieDetail'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail/>
          </Route>
          <Route path="/">
            <MoviesList/>
          </Route>
       </Switch>
      </Router>
    </div>
  );
}


export default App;
