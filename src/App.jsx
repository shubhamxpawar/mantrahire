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

  console.log("App rendered")

  return (
    <div className='bg-slate-200 min-h-screen flex flex-col V-font' >
      
      <Navbar></Navbar>

      <main className='pt-20 flex-grow'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/meetourfounders' element={<MeetOurFounders />}></Route>
          <Route path='/ourclients' element={<OurClients />}></Route>
          <Route path='/ourservices' element={<OurServices />}></Route>
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
