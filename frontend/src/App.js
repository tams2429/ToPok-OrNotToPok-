// import logo from './logo.svg';
import './App.css';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Search />
        <p>
          Test
        </p>
      </header>
    </div>
  );
}

export default App;
