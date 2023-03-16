import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import People from "./Pages/People";
import {Routes,Route} from 'react-router-dom'
import { Bio } from "./Components/Bio";

function App() {
  return (
    <div className="App">
      <Routes> 
      <Route path="/" element={<People />}  ></Route>      
      <Route path="/bio" element={<Bio/>}  ></Route>    
      </Routes>
      
    </div>
  );
}

export default App;
