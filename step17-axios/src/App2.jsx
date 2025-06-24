import './App.css' 
 
import axiosInstance from './api/axiosinstance'; 
 
function App2() { 
  const selectAll =()=>{ 
   axiosInstance 
    .get("/users/") 
    .then((result)=>{ 
      result.data.map((user)=>console.log(user.id +" | " + user.name +" | " + user.address.street)); 
    }) 
    .catch((err)=>{ 
       console.log(err); 
    }); 
  } 
 
  const selectById =()=>{ 
     axiosInstance({ 
      url:"/users/3", 
      method:"get", 
      //data:, //서버에게 보낼 parameter 정보  
     }) 
     .then((result)=>{ 
       console.log(result);
          }) 
     .catch((err)=>{ 
         console.log(err); 
     }); 
  } 
 
  ///////Spring 연동 axios/////////////////////// 
  const insertUser = ()=>{ 
    axiosInstance({ 
      url:"/user", 
      method:"post", 
      data:{name:"jang", email:"8253jang@daum.net" , age:20}, //서버에게 보낼 parameter 정보  
     }) 
     .then((result)=>{ 
       console.log(result); //ok?? 
     }) 
     .catch((err)=>{ 
         console.log(err); 
     }); 
  } 
 
  const deleteUser =()=>{ 
    axiosInstance({ 
      url:"/user/3", 
      method:"delete", 
     }) 
     .then((result)=>{ 
       console.log(result); //ok?? 
     }) 
     .catch((err)=>{ 
        console.log("------") 
         console.log(err.response.data.title +" | " + err.response.data.detail); 
     }); 
  } 
 
  const updateUser =()=>{ 
    axiosInstance({ 
      url:"/user/3", 
      data:{name:"jang", email:"8253jang@daum.net" , age:20}, //서버에게 보낼 parameter 정보  
      method:"put", 
     }) 
     .then((result)=>{ 
       console.log(result); //1 
     }) 
     .catch((err)=>{ 
        console.log("------") 
         console.log(err.response.data.title +" | " + err.response.data.detail); 
     });
      } 
  const getbyId =()=>{ 
    axiosInstance({ 
      url:"/user/3", 
      method:"get", 
     }) 
     .then((result)=>{ 
       console.log(result.data); // 
     }) 
     .catch((err)=>{ 
        console.log("------") 
         console.log(err.response.data.title +" | " + err.response.data.detail); 
     }); 
  } 
  const getUsers =()=>{ 
    axiosInstance({ 
      url:"/users", 
      method:"get", 
     }) 
     .then((result)=>{ 
       console.log(result.data); // 
     }) 
     .catch((err)=>{ 
        console.log("------") 
         console.log(err.response.data.title +" | " + err.response.data.detail); 
     }); 
  } 
 
  return ( 
    <> 
      <h1>Axios Tes- env.local vs env.production</h1> 
      <button onClick={selectAll}>get - selectAll</button> 
      <button onClick={selectById}>get - selectById</button> 
 
      <h3> Spring boot 연동하기(CRUD)</h3> 
      <button onClick={insertUser}>post - user등록</button> 
      <button onClick={deleteUser}>delete - user삭제</button> 
      <button onClick={updateUser}>put - user수정</button> 
      <button onClick={getbyId}>get - user 부분조회 </button> 
      <button onClick={getUsers}>get - user전체조회</button> 
 
    </> 
  ) 
} 
 
export default App2 