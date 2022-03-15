import "./App.css";
import Login from "./Components/Features/Login.component";
import { Register } from "./Components/Features/Register.component";
// import { Test } from "./Components/Features/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        {/* <Register /> */}
        {/* <Test /> */}
      </header>
    </div>
  );
}

export default App;
