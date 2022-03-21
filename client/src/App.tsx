import "./App.css";
import AuthProvider from "./Context/AuthProvider.component";
import RouterApp from "./Router/RouterApp.component";


function App() {
  return (
      <AuthProvider>
          <RouterApp />
      </AuthProvider>
  );
}

export default App;
