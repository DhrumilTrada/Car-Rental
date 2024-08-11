import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './components/css/style.css'
import './components/css/carousel.css'
import './components/css/bootstrap.min.css'
import './components/js/main.js'

createRoot(document.getElementById('root')).render(
    <App />
)
