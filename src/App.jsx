import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from './Pages'
import NavBar from './Banner/NavBar'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />}/>
          <Route path="/about" element={<Pages.About />}/>
          {/* <Route path="/superJobs" element={<Pages.SuperJobs />}/>
          <Route path="/superJobs/:id" element={<Pages.SuperJob />}/> */}
          <Route path="/random" element={<Pages.Random />}/>
          <Route path="/search" element={<Pages.Search />}/>
          <Route path="*" element={<Pages.NotFound />}/>
        </Route> 
      </Routes>
    </>
  )
}

export default App
