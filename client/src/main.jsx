import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const main = document.getElementById('root')
const root = ReactDOM.createRoot(main)

const app = (

  <React.StrictMode>
    <App />
  </React.StrictMode>

)

root.render(app)