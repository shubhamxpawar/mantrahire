import './App.css'
import { Route, Router, Routes, useNavigate } from 'react-router'
import { Home } from './pages/Home'
import { MeetOurFounders } from './pages/MeetOurFounders'
import { ContactUs } from './pages/ContactUs'
import { OurClients } from './pages/OurClients'
import { Careers } from './pages/Careers'
import { OurServices } from './pages/OurServices'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='bg-slate-400 h-lvh V-font' >
      
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/careers' element={<Careers />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/meetourfounders' element={<MeetOurFounders />}></Route>
        <Route path='/ourclients' element={<OurClients />}></Route>
        <Route path='/ourservices' element={<OurServices />}></Route>
      </Routes>

      <Footer />

    </div>
  )
}

export default App
