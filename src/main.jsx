import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MultiProvider } from './context/MultiProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultiProvider>
      <App />
    </MultiProvider>
  </React.StrictMode>,
)
