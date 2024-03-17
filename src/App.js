import logo from './logo.svg';
import './App.css';
import Watch from './components/Watch';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Watch />
      </header>
    </div>
  );
}

export default App;
