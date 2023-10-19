import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { CssBaseline } from '@mui/material'

import './tailwind.css'
import './style.scss'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
)
