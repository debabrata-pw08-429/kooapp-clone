import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientID =
  "147260584431 - dsp5dsqk22jsa3u1lq121ls6iesj6rkc.apps.googleusercontent.com";
=======
import {ChakraProvider} from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import FeedContextProviderComponent from "../src/Context/FeedContext";

>>>>>>> 85629b30f717323f9844ebc597ad5c29ad301deb
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
  <BrowserRouter>
<<<<<<< HEAD
    <GoogleOAuthProvider clientId="147260584431-dsp5dsqk22jsa3u1lq121ls6iesj6rkc.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
=======

  <Provider store={store}>
  <FeedContextProviderComponent>
  
    <App />
  
   </FeedContextProviderComponent>
   </Provider>
>>>>>>> 85629b30f717323f9844ebc597ad5c29ad301deb
  </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
