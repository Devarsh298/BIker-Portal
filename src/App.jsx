import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './Client/About'
import Home from './Client/Home'
import FAQ from './Client/Faq'
import Contact from './Client/Contact'
import Bike from './Client/BIke'

import HeroGlamour from './Client/Splendor'



function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
        <Route path='/Faq' element={<FAQ></FAQ>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Bike' element={<Bike></Bike>}></Route>
        <Route path='/HeroGlamour' element={<HeroGlamour></HeroGlamour>}></Route>
        <Route path = '/login' element = {<Login></Login>}</Route>

        
      </Routes>
      </BrowserRouter>
     

    </>
  )
}

export default App
