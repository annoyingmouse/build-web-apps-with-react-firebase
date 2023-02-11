import logo from './assets/images/vector/logo.svg';
import './assets/style/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./assets/images/vector/logo.svg"
             className="App-logo"
             alt="logo" />
        <img src={logo}
             className="App-logo"
             alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer" >
          Learn React & Firebase
        </a>
      </header>
    </div>
  );
}

export default App;
