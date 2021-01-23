import React from 'react';
import Navbar from './components/Navbar'
import ExemptionContainer from './components/ExemptionContainer'

function App() {
  return (
    <div className="flex relative flex-col h-screen">
      <Navbar />
      <ExemptionContainer />
    </div>
  );
}

export default App;
