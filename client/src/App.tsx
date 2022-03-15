import "./App.css";
import Login from "./Components/Pages/Login.component";
import { Register } from "./Components/Pages/Register.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        <Register />
      </header>
    </div>
  );
}

export default App;
