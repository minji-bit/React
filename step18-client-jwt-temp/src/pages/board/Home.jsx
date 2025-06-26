import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../App";
import BoardItem from "../../components/BoardItem";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../api/axiosinstance';

const Home =()=>{
  const {setIsLogin}= useContext(LoginContext);

  const [boards,setBoards] = useState([]);
  const nav = useNavigate();

  useEffect(()=>{
        axiosInstance.get(
          "/boards",{
            headers: {
              Authorization : localStorage.getItem("Authorization"), //토큰정보이다.
              }
          })
          .then((res)=>{
            console.log(res);
              setBoards(res.data);
          })
          .catch(err=>{
            if(err.response.status===403){  //403에러???
              localStorage.clear();//모든 세션의 정보 지우기
                setIsLogin(false);
                alert("로그인하고 이용해주세요.");
                nav("/loginForm");
            }else{
            alert(err.response.data.detail) ;
            }
          });} ,[]);//initial 에만!! 
          
    return (
      <div className="Home">
       <h1>전체게시물 LIST</h1>
        {/* BoardItem   추가.. */}
        {
          boards.map(board=><BoardItem key={board.id} board={board}/>)
        }
      </div>
    )
  }
  
  export default Home;