import "./App.css";
import Dice from "./components/dice";
import {PlayerProvider} from './context/playerProvider';

function App() {
  return (
    <div className="App">
      <PlayerProvider>
        <Dice />
      </PlayerProvider>
    </div>
  );
}

export default App;
