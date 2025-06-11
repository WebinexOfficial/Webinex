import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";
import App from "./App.jsx";
import Store from './components/Store.jsx'
import { Provider } from "react-redux";

const clientId =
  "219967036471-ba292n747v92ei2966jsvhr6t73t7i9b.apps.googleusercontent.com";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={Store}>
<BrowserRouter>
      
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
    
    </BrowserRouter>
    </Provider>
    
  </StrictMode>
);