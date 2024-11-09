import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AddData from './Components/adddata';
import DisplayData from './Components/displaydata';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <AddData/>
        <DisplayData/>
    </>
  );
}

export default App;
