import "./App.css";
import { SideBar } from "./Components/SideBar";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
         <SideBar/>
      </ChakraProvider>
    </div>
  );
}

export default App;
