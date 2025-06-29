import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import LabelText from "../../components/LabelText";
import './UpdateForm.css';
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosinstance";

const UpdateForm =()=>{

  const { id } = useParams(); //

  const [board, setBoard] = useState({
    title: "",
    content: "",
    member: {},
  });

  //페이지 이동하는 방법
  const nav = useNavigate();
  
  useEffect(() => {
    axiosInstance({
      method:"get",
      headers:{
        Authorization : localStorage.getItem("Authorization")
      },
      url:"/boards/"+id
    })
    .then((res)=>{
      console.log(res);
      setBoard(res.data);
    })
    .catch((err)=>{
      errFun(err);
    })
  }, []);
  const errFun = (err)=>{
      if (err.response.status === 403) {
        alert("로그인하고 이용해주세요.");
        } else {
        let errMessage = "오류 = " + err.response.data.type + "\n";
        errMessage += err.response.data.title + "\n";
        errMessage += err.response.data.status + "\n";
        errMessage += err.response.data.instance + "\n";
        errMessage += err.response.data.timestamp;
        alert(errMessage);
        }
        nav("/");
   }
 
  const changeValue = (e)=>{
     setBoard(
        {...board , 
         [e.target.name] : e.target.value
     })
  }

 const submitBoard = (e)=>{
     axiosInstance({
      method:"put",
      url:"/boards/"+id,
      headers:{
        Authorization : localStorage.getItem("Authorization")
      },
      data:board
     })
     .then((res)=>{
       if(res.data==="ok")
        alert("수정이 완료되었습니다.")
        nav("/board/"+id);
     })
     .else((err)=>{
       errFun(err);
     })
 };
    return (
      <>
       <h1 className="h1">  수정하기 </h1>
      <form>
       
        <LabelText text={"title"} name={"title"} initValue={board.title} 
        changeValue={changeValue} />
       
        <LabelText text={"writer"} name={"name"}  readOnly="yes"/>
      
        <div className="divContent">
          <div className="divContent_label">cotent</div> 
          <textarea 
          className="divContent_textarea" 
          placeholder="내용을 입력해주세요"
           name="content" 
           value={board.content} 
           onChange={changeValue}></textarea>
       </div>

        <div className="divBtn">
            <Button text={"수정"}  type={"button"}  onClick={submitBoard}/>
            <Button text={"취소"}  type={"reset"} />
        </div>
        </form>
      </>
    )
  }
  
  export default UpdateForm;