import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './components/css/style.css'
import './components/css/carousel.css'
import './components/css/bootstrap.min.css'
import { Provider } from "react-redux"
import { store } from "./components/templates/app/store.jsx"

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)