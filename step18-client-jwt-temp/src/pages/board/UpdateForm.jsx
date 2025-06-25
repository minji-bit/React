import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import LabelText from "../../components/LabelText";
import './UpdateForm.css';
import { useEffect, useState } from "react";

const UpdateForm =()=>{

  const { id } = useParams(); //

  const [board, setBoard] = useState({
    title: "",
    content: "",
    member: {},
  });

  //페이지 이동하는 방법
  const navigator = useNavigate();
  
  useEffect(() => {
   
  }, []);

 
  const changeValue = (e)=>{
     setBoard(
        {...board , 
         [e.target.name] : e.target.value
     })
  }

 const submitBoard = (e)=>{
   
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