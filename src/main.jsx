import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReContextPro from './components/reContextPro.jsx'

createRoot(document.getElementById('root')).render(
  <ReContextPro>
    <App />
  </ReContextPro>,
)
