import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { LoginContext } from '../App';
import Button from './Button';

const Header =()=>{
  const {isLogin,setIsLogin} = useContext(LoginContext);
  const nav = useNavigate();
  const logoutCheck=()=>{
    localStorage.clear();
    setIsLogin(false);
    nav("/");
  }
    return (
      <>
        <div className="Header">
            <Link to="/" >HOME</Link>
            {isLogin && <Link to="/saveForm">글쓰기</Link>}
           {!isLogin && <Link to="/joinForm">회원가입</Link>}
            {isLogin ?(
              <div className='login'>
                  <span>{localStorage.getItem("name")}님</span>
                  <Button text={"로그아웃"} type={"button"} onClick={logoutCheck}/>
              </div>
            ) :
            
            <Link to="/loginForm">로그인</Link>
            }
        </div>    
      </>
    )
  }
  
  export default Header;