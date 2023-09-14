import React from 'react';
import './App.css';
import Dice from './components/Dice';
import logo from './assets/logo.png'; // Importez le logo depuis le dossier assets

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500">
    <header className="App-header">
      {/* Utilisez les classes pour centrer l'image */}
      <div className="flex flex-col items-center">
        <img src={logo} alt="Devoteam Logo" className="w-3/4 md:w-1/2 lg:w-1/3 mb-4" />
        {/* Les classes w-3/4, md:w-1/2, lg:w-1/3 agrandissent l'image */}
      </div>
    </header>
    <main>
      <Dice />
    </main>
  </div>
  );
}

export default App;