import './App.css';
import Navigation from './components/Nav';
import LogForm from './components/LogForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='body'>
        <header className="App-header">
          <Navigation></Navigation>
        </header>
        <br></br>
        <div className='main'>
          <LogForm />
          <br />
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
