import "./App.css";
import AuthProvider from "./Context/AuthProvider.component";
import ThemeProvider from "./Context/ThemeProvider/ThemeProvider";
import RouterApp from "./Router/RouterApp.component";


function App() {
  return (
      <AuthProvider>
        <ThemeProvider>
          <RouterApp /> 
        </ThemeProvider>
      </AuthProvider>
  );
}

export default App;
