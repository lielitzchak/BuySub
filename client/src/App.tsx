import "./App.css";
import { Test } from "./Components/Features/Test";
import Login from "./Components/Pages/Login.component";
import { Register } from "./Components/Pages/Register.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test/>
        {/* <Login/>
        <Register /> */}
      </header>
    </div>
  );
}

export default App;
