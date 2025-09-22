import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StylesProvider } from './providers/StylesProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StylesProvider>
      <App />
    </StylesProvider>
  </StrictMode>,
)
