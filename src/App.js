import logo from './logo.svg';
import './App.css';
import { Componente1 } from './componentes/Componente1';
import { Componente2 } from './componentes/Componente2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este es el componente principal
        </p>
        <h1>para github</h1>
        <Componente1></Componente1>
        <Componente1></Componente1>
        <Componente2></Componente2>
      </header>
    </div>
  );
}

export default App;
