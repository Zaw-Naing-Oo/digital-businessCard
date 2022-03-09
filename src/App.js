import react from 'react';
import logo from './beauty.svg'
import Main from './components/Main';
import './App.css';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <div className='section'>
        <img src={logo} />
        <Main />
        <Footer />
      </div>
        
    </div>
  );
}

export default App;
