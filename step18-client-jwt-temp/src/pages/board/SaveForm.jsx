import { useState } from "react";
import Button from "../../components/Button";
import LabelText from "../../components/LabelText";
import "./SaveForm.css";

const SaveForm =()=>{
  
  //게시물 상태관리
  const [board, setBoard] = useState({
    title: "",
    content: "",
    memberNo: localStorage.getItem("memberNo"),
  }); //제목, 작성자=memberNo, 내용

  //input 에 값이 변경될 때
  const changeValue = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  //등록하기 클릭
  const submitBoard = (e) => {
    
  };

    return (
      <>
      <h1 className="h1">  게시물 등록하기 </h1>
     
        <LabelText text={"title"} name={"title"} changeValue={changeValue}/>
        <LabelText text={"writer"} name={"name"} readOnly={"yes"}/>
     
        <div className="divContent">
          <div className="divContent_label">cotent</div> 
          <textarea className="divContent_textarea" placeholder="내용을 입력해주세요^^"  name="content" onChange={changeValue}></textarea>
       </div>

        <div className="divBtn">
            <Button text={"등록"}  type={"button"}  onClick={submitBoard}/>
            <Button text={"취소"}  type={"reset"}  onClick={()=>navigator(-1)}/>
        </div>
      </>
    )
  }
  
  export default SaveForm;