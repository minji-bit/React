
import Button from "../../components/Button";
import LabelText from "../../components/LabelText";
import "./Detail.css";
import { useState } from "react";

const Detail =()=>{
 
   const [board, setBoard] = useState({
     id: "",
     title: "",
     content: "",
     member: {},
     regDate:""
   });


   //삭제
   const deleteBoard = () => {
    
  };//삭제끝

  //수정 클릭
  const updateBoard = () => {
   

  };

    return (
      <div className="Detail">
       <h1>상세보기</h1>
      
        <LabelText text={"글번호"}  initValue={board.id}/>
        <LabelText text={"제목"}  initValue={board.title}/>
        <LabelText text={"작성자"}  initValue={board.member.name}/>
        <LabelText text={"등록일"}  initValue={board.regDate}/>
  
        <div className="divContent">
          <div className="divContent_label">cotent</div> 
          <textarea className="divContent_textarea" placeholder="오늘은 어땠나요?"
           name="content"  disabled value={board.content}></textarea>
       </div>
      
      { board.member.name === localStorage.getItem("name") &&
       <div className="divBtn">
            <Button text={"수정"}  type={"button"}  onClick={updateBoard}/>
            <Button text={"삭제"}  type={"button"} onClick={deleteBoard} />
        </div>
      }  
      
      </div>
    )
  }
  
  export default Detail;