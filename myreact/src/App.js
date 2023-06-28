import './App.css';
import Navigation from './Nav'
import LoginForm from './LogForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <br></br>
      <div className="App-header">
        <LoginForm></LoginForm>
      </div>
      
    </div>
  );
}

export default App;
