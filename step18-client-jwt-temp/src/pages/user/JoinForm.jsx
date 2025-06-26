import { useState } from "react";
import Button from "../../components/Button";

import LabelText from "../../components/LabelText";
import "./JoinForm.css";
import axiosInstance from '../../api/axiosinstance';
import { useNavigate } from 'react-router-dom';

const JoinForm =()=>{
   const [member, setMember] = useState({
    id: "",
    name: "",
    pwd: "",
    address: "",  //아래 폼에 있는 id 와 매칭되어서 들어가는건가?
  });

 // 중복체크 결과 값을 저장 할 idCheckResult
 const [idCheckResult , setIdCheckResult] = useState(""); //중복입니다. or 사용가능합니다.

// 아이디 중복여부에 따른 css 를 적용하기 위해 상태 변수
 const [isCheckResult , setIsCheckResult] = useState(false); //true이면 중복, false이면 사용가능

  //각 text 박스에 값이 변경되었을 때
  const changeValue = (e) => {
      //입력 값이 변경 될 때마다 member의 정보를 변경
      setMember({...member,[e.target.name]:e.target.value});
       //중복 체크하기
      if(e.target.name==="id"&&e.target.value!==""){
        axiosInstance
          .get("/members/"+e.target.value)
          .then((res)=>{
            setIdCheckResult(res.data);//String res 그대로 읽을순 없나?
            res.data==="중복입니다." ? setIsCheckResult(true):setIsCheckResult(false);
          }

        ) 
          .catch((err)=>{alert(err)})
      }
  };
  
  const nav = useNavigate();
 
  //가입하기
  const submitJoin = (e)=>{
      axiosInstance({
        url:"/members",
        method:"post",
        data:member
      })
      .then((res)=>{
        console.log(res);
        nav("/");
      })
      .catch((err)=>{console.log(err)});

    };
    return (
      <>
      <h1 className="h1">회원가입</h1>
     
        <div className="idDuplicate">
           <LabelText text={"아이디"} name={"id"}   changeValue={changeValue}/> {/*changeValue 라는 props 를 전달 */}
         <div className="idText" style={ isCheckResult ? {color: "red"} : {color: "blue" } }>{idCheckResult}</div>
        </div>

        <LabelText text={"이름"} name={"name"}   changeValue={changeValue} />
        <LabelText text={"비밀번호"} name={"pwd"}    changeValue={changeValue}/>
        <LabelText text={"주소"} name={"address"}   changeValue={changeValue} />
        
        <div className="divBtn">
            <Button text={"회원가입"}  type={"button"}  onClick={submitJoin} />
            <Button text={"취소"}  type={"reset"} />
        </div>
      </>
    )
  }
  
  export default JoinForm;