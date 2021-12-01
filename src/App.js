import './App.css';

// import Home from './pages/Home'
import Destination from './pages/Destination';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Destination />
    </div>
  );
}

export default App;
