// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { HashRouter as Router } from "react-router-dom";
import App from "./App.jsx";

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
