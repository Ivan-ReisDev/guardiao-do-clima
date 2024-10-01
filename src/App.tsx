import React from 'react';
import './App.css'
import Game from './components/Game';


const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('./assets/logo.jfif')] bg-cover bg-center">
      <Game />
    </div>
  );
};

export default App;
