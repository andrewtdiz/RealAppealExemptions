import React from 'react';
import Navbar from './components/Navbar'
import BlogContent from './components/BlogContent'

function App() {
  return (
    <div className="flex relative flex-col h-screen">
      <Navbar />
      <BlogContent />
    </div>
  );
}

export default App;
