import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Feed from '../Pages/Feed'
import Create from '../Pages/Create'

function Allroutes() {
  return (
   <Routes>
     <Route path="/feed" element={<Feed/>}  ></Route>
     <Route path="/create" element={<Create/>}  ></Route>
   </Routes>
  )
}

export default Allroutes