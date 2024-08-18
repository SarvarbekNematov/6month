import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Context_app } from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context_app>
      <App />
    </Context_app>
  </BrowserRouter>
)
