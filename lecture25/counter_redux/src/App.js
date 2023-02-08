import './App.css';

import { Counter } from './components/Counter';
import ShowCount from './components/showCount';

function App() {
  return (
    <div className="App">
      <ShowCount />
      <Counter />
    </div>
  );
}

export default App
