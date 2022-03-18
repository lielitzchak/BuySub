import "./App.css";
import RouterApp from "./Router/RouterApp.component";
import AuthProvider from './Context/AuthProvider.component';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </div>
  );
}

export default App;
