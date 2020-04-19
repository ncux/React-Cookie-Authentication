import React from 'react';
import './App.css';
import { AuthState } from "./context/authentication";
import { Router } from "./router";

const App = () => {

  return (
    <AuthState>
        <Router>
          <div className="App">
          </div>
        </Router>
    </AuthState>
  );
}

export default App;
