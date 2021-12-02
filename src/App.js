import './App.css';

// import Home from './pages/Home'
// import Destination from './pages/Destination'
import Crew from './pages/Crew'

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Destination /> */}
      <Crew />
    </div>
  );
}

export default App;
