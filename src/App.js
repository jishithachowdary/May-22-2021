import './style.css';
import React from 'react';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ResponsiveDrawer />
      </div>
    </Router>
  );
}

export default App;
