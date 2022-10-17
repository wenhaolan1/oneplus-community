import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './rem'
import Swiper from 'swiper/dist/js/swiper.js'
import 'antd/dist/antd.css';
import "swiper/dist/css/swiper.min.css"
import '@/assets/style/reset.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/iconfont/iconfont.css'
import { Provider } from 'react-redux'
import store from '@/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
