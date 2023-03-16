import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import People from "./Pages/People";
import Rsidebar from "./Components/Rsidebar";
// import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        {/* <People /> */}
        {/* <Login /> */}
      <Rsidebar/>
      </ChakraProvider>
    </div>
  );
}

export default App;
