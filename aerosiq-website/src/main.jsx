import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './styles/global.css' // Importing the global styles
import './index.css' // Importing the index.css file for Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)