import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import CreateNote from './components/CreateNote/CreateNote';

function App() {
  return (
    <>
      <Header/>
      <CreateNote/>
    </>
  );
}

export default App;
