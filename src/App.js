import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import People from "./Pages/People";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
         <People/>
      </ChakraProvider>
    </div>
  );
}

export default App;
