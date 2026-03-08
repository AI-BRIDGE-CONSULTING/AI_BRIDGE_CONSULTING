import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./components/Home.jsx";
import FormSend from "./components/FormSend.jsx";
import NotFound from "./components/NotFound.jsx";
import { useContext } from 'react';
import { SendContext } from './context/Context.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { SendProvider } from "./context/Context.jsx";

function App() {
  
  return (
    <>
      <SendProvider>
        <Router>
          <Routes>
            <Route
              path="/Send"
              element={
                <FormSend/>
              }
            />
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SendProvider>
    </>
  );
}

export default App;
