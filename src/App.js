import './App.css';
import Navbar from './components/navbar/navbar';
import Matchscreen from './components/matchscreen/matchscreen';

function App() {
  return (
    <div className="App">
      <div className='mainbox'>
        <div className='navbar'>
          <Navbar></Navbar>
        </div>
        <div className='matchscreen'>
          <Matchscreen></Matchscreen>
        </div>
      </div>


    </div>
  );
}

export default App;
