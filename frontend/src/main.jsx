import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Mainpage from './components/mainpage.jsx'
import Displaypage from './components/Displaypage.jsx'
import Editpage from "./components/Editpage.jsx"; 
import ShowFullContent from './components/ShowFullContent.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
  <Route path='/' element={<App/>}></Route>
  <Route path='/mainpage' element={<Mainpage/>} />
  <Route path='/Displaypage' element={ <Displaypage />} />  
  <Route path='/Editpage/:id' element= {<Editpage />} />
  <Route path='/ShowFullContent/:id' element={<ShowFullContent/>} />
</Routes>
</BrowserRouter>
   
  </React.StrictMode>,
)
