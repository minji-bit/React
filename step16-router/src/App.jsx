import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home';
import Notfound from "../pages/Notfound";
import User from '../pages/User';
import Admin from '../pages/Admin';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user/:id' element={<User/>}/>
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
