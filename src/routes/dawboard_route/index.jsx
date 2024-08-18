import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dawboard } from '../../pages/dawboard'
import { Teachers } from '../../pages/teachers/teachers'
import { AddTeachers } from '../../pages/teachers/addTeachers'
import { About } from '../../pages/about'
import { SiteBar } from '../../components/sitebar'
import { NavbarDawboard } from '../../components/navbar'
import { Navbar } from '../../components/navbar/navbar'

export const DawRoute = () => {
  return (
    <div className="mx-auto  flex items-start ">
      <div className=''>
        <SiteBar />
      </div>
      <div className='grid grid-cols-1 ml-[241px]'>
          {<Route path='/' element={<Dawboard/>}/> ? <NavbarDawboard/> : <Navbar/> }
        <Routes>
            <Route path="/" element={<Dawboard/>}/>
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path='/addteachers' element={<AddTeachers/>}/>
            <Route path='/about' element={<About/>}/>  
            
        </Routes>
      </div>
        
    </div>
  )
}
