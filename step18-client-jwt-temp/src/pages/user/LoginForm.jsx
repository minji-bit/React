import Button from "../../components/Button";
import LabelText from "../../components/LabelText";
import  { useContext, useState } from "react";
import "./LoginForm.css";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosinstance';
import { LoginContext } from "../../App";

const LoginForm =()=>{
  const {setIsLogin} = useContext(LoginContext);
  

  // 인증에 필요한 username, password 상태관리를 위한 useState
  const [member, setMember] = useState({
    username: "",
    pwd: "",
  });

  // input 에 값이 입력될 때 상태 값 수정
  const changeValue = (e) => {
    
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  }; //

   const nav = useNavigate();
 //로그인
  const submitLogin = (e) => {
    e.preventDefault();  //새로고침 안되게 하려고!!

    const formData = new FormData();
    formData.append("username",member.username);
    formData.append("password",member.pwd);

    axiosInstance({
      method:"post",
      url:"/login", //springsecurity 사용하면 default경로이고 바꿀수도 있따! 
      data:formData
    })
    .then((res)=>{
      console.log(res);
      localStorage.setItem("memberNo", res.data.memberNo);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("address", res.data.address);
      localStorage.setItem("Authorization", res.headers.authorization);
      //App.js 에 있는 isLogin 변수를 true 변경한다.
      setIsLogin(true);
      //Home.jsx 로 이동한다.
      nav("/");
    })
    .catch(()=>{
      alert("정보를 다시 확인해주세요")
    })

  }

  //취소
   const cancelBack=(e)=>{
      e.preventDefault();
     
      setMember({
    username: "",
    password: "",
  });
   }


    return (
      <div className="LoginForm">
        <h1 className="h1">로그인</h1>
        <LabelText text={"아이디"} name={"username"}  changeValue={changeValue} />
        <LabelText text={"비밀번호"} name={"pwd"} changeValue={changeValue} />

        <div className="divBtn">
            <Button text={"로그인"}  type={"button"}  onClick={submitLogin}/>
            <Button text={"취소"}  type={"reset"}  onClick={cancelBack}/>
        </div>
        
      </div>
    )
  }
  
  export default LoginForm;