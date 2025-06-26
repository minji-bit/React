
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/board/Home'
import SaveForm from './pages/board/SaveForm'
import Detail from './pages/board/Detail'
import UpdateForm from './pages/board/UpdateForm'
import LoginForm from './pages/user/LoginForm'
import JoinForm from './pages/user/JoinForm'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import { createContext, useEffect ,useState} from 'react'


export const LoginContext = createContext();

function App() {
  const [isLogin,setIsLogin] = useState(false);
  useEffect(()=>{
    localStorage.getItem("id") != null ? setIsLogin(true) : setIsLogin(false);
  },[isLogin]);

 

  return (
    <div className="App">
      <LoginContext.Provider value={{isLogin,setIsLogin}}>
       <Header/>
       <main className="AppManin">
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/saveForm' element={<SaveForm/>} />
            <Route path='/board/:id' element={<Detail/>} />
            <Route path='/updateForm/:id' element={<UpdateForm/>} />
            <Route path='/loginForm' element={<LoginForm/>} />
            <Route path='/joinForm' element={<JoinForm/>} />
            <Route path='/*' element={<NotFound/>} />
        </Routes>
     </main>
        <Footer />
         </LoginContext.Provider>
    </div>
  )
}

export default App
