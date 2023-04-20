import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import FeedContextProviderComponent from "../src/Context/FeedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <Provider store={store}>
          <FeedContextProviderComponent>
            <App />
          </FeedContextProviderComponent>
        </Provider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
