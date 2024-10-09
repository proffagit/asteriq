import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/* IONICONS SETUP */
import { addIcons } from 'ionicons'
import * as allIcons from 'ionicons/icons'

// Add all Ionicons to the library
// This allows you to use any Ionicon without importing it individually
addIcons(allIcons)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
