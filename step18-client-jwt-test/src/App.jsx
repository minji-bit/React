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
function App() {
return (
<div className="App">
<Header/>
<main className="AppManin">
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/saveForm' element={<SaveForm/>} />
<Route path='/board/:id' element={<Detail/>} />
<Route path='/updateForm/:id' element={<UpdateForm/>}/>
<Route path='/loginForm' element={<LoginForm/>} />
<Route path='/joinForm' element={<JoinForm/>} />
<Route path='/*' element={<NotFound/>} />
</Routes>
</main>
<Footer />
</div>
)
}
export default App
