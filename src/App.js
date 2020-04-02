import React from 'react';
import {Router} from '@reach/router'
import {Welcome} from './containers/Welcome'

function App() {
  return (
    <Router>
    <Welcome  path="/" />
  </Router>
  );
}

export default App;
