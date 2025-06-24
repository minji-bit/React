import axios from 'axios';



function App() {
  const selectAll=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((result)=>{
          console.log(result.data);
          result.data.map(user=>console.log(user.id+" | "+user.address.street));
        })
        .catch((error)=>{
          console.log(error);
        });
  }
  const selectById=()=>{
    axios({
      url:"https://jsonplaceholder.typicode.com/users/2",
      method:"get"
      //data:
    })
    .then((result)=>{
      console.log(result);
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  //////////SpringBoot연동////////////////////////////////
  const serverIp = import.meta.env.VITE_API_SERVER_IP;
  console.log(serverIp);
  const insertUser =()=>{ 
    console.log(serverIp) 
    axios({ 
      url:serverIp+"/user", 
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
    axios({ 
      //url:"http://localhost:9000/user/5", 
      //url:"http://localhost:9000/user/3", 
      // url:serverIp+"/user/3", 
      url:serverIp+"/user/5", 
      method:"delete", 
     }) 
     .then((result)=>{ 
       console.log(result); //ok?? 
     }) 
     .catch((err)=>{ 
        console.log("------") 
        console.log(err) 
         console.log(err.response.data.title +" | " + err.response.data.detail); 
     }); 
  } 
 
  const updateUser =()=>{ 
    axios({ 
      url:serverIp+"/user/3", 
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
    axios({ 
      url:serverIp+"/user/3", 
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
    axios({ 
      url:serverIp+"/users", 
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
      <h1>Axios Test</h1> 
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

export default App
