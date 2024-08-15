import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Property from './components/Category/Property'
import SingleProperty from './components/SinglePropertyCard/SingleProperty'

function App() {
   

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/property/:property' element={<Property />} />
          <Route path='/singleProperty/:id' element={<SingleProperty/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
