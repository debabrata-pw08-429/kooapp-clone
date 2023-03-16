import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import People from "./Pages/People";
// import { Login } from "./Components/Login";
// import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <People />
        {/* <Home />
        <Login /> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
