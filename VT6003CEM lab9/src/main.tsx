import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './components/Hello';
import Goodbye  from './components/Goodbye';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Hello name="Web API Development"/>
    
  </StrictMode>
)
