import './App.css';

import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [pageSelected, setPageSelected] = useState()

  const HandlePageSelected = (change) => {
    setPageSelected(change)
  }

  const HandleShowPages = () => {
    switch (pageSelected) {
      case 'Home':
        return <Home />
      case 'Destination':
        return <Destination />
      case 'Crew':
        return <Crew />
      case 'Technology':
        return <Technology />
      default:
        return <Home />
    }
  }

  return (
    <div className="App">
      <Navbar HandlePageSelected={HandlePageSelected} />
      {
        HandleShowPages()
      }
    </div>
  );
}

export default App;
