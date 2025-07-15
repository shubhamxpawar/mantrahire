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
import AdminPanel from './pages/AdminPanel'
import ScrollToTop from './components/ScrollToTop'


function App() {

  console.log("App rendered")

  return (
    <div className=' min-h-screen flex flex-col V-font' >

      <Navbar></Navbar>
      <ScrollToTop />
      <main className='pt-20 flex-grow'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/meetourfounders' element={<MeetOurFounders />}></Route>
          <Route path='/ourclients' element={<OurClients />}></Route>
          <Route path='/ourservices' element={<OurServices />}></Route>
          <Route path='/admin' element={<AdminPanel />}></Route>
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
