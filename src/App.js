import './App.css';
import Board from "./main/page/board"
import { APIContextProvider } from "./main/context/apiContext";


function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <Board/>
        </div>
    </APIContextProvider>

  );
}

export default App;
