import "./App.css";
import ButtonAppBar from "./components/appBar";
import Home from "./components/home";


function App() {
  return (
      <div className="App">
        <ButtonAppBar />
        <div className="content">
          <Home />
        </div>
      </div>
  );
}

export default App;