import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Page/Home/Home.jsx'
import MyList from './Page/MyList/MyList.jsx'
import { Routes , Route  } from 'react-router-dom'

import {HOME ,MY_LIST } from './constants/path'

function App() {
  return (
   <div className='App'>
   <Navbar/>
   <Routes>
    <Route path={HOME} element={<Home/>}/>
    <Route path={MY_LIST} element={<MyList/>}/>
   </Routes>
   </div>
   
   
  )
}

export default App
