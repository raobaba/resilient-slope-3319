import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Routes/Home.jsx';
import OnlineCourses from './../Routes/OnlineCourses';
import Certification from './../Routes/Certification';
import LiveTraining from './../Routes/LiveTraining';
import RemoteWorking from './../Routes/RemoteWorking';
import More from './../Routes/More';
import SignIn from './../Routes/SignIn';
import Register from './../Routes/Register';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/onlinecourses' element={<OnlineCourses  />} />
        <Route path='/certification' element={<Certification  />} />
        <Route path='/livetraining' element={<LiveTraining  />} />
        <Route path='/remoteworking' element={<RemoteWorking  />} />
        <Route path='/more' element={<More  />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register  />} />
    </Routes>
  )
}

export default AllRoutes