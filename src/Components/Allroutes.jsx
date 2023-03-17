import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Feed from '../Pages/Feed'
import Create from '../Pages/Create'
import People from '../Pages/People'


function Allroutes() {
  return (
   <Routes>
     <Route path="/feed" element={<Feed/>}  ></Route>
     <Route path="/create" element={<Create/>} ></Route>
     <Route path="/people" element={<People/>} ></Route>
   </Routes>
  )
}

export default Allroutes