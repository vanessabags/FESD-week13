import './App.css';
import Navigation from './Nav'
import LogForm from './LogForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <br></br>
      <div className='main'>
        <LogForm />
        <br />
        </div>
      
    </div>
  );
}

export default App;
