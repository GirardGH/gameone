import './App.css';
import Dice from './components/Dice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Application de Recrutement RH</h1>
      </header>
      <main className="container mx-auto p-4">
        <Dice />
      </main>
    </div>
  );
}

export default App;
