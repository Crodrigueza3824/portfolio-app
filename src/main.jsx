import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import { PortfolioApp } from './PortfolioApp'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(


    <BrowserRouter>
        <Provider store={ store }>
            <PortfolioApp />
        </Provider>
    </BrowserRouter>
  
)

