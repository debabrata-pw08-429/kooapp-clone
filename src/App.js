import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
// import People from "./Pages/People";
// import Rsidebar from "./Components/Rsidebar";
import { Login } from "./Components/Login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        {/* <People /> */}
        {/* <Login /> */}
        {/* <Rsidebar /> */}
        <Navbar />
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
