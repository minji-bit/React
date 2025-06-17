import './JSX_Test.css';


function JSX_Test(){
    console.log("JSX_Test call..")

    const message="Jsx문법 공부하기";
    const student={
    name:"희정",
    age:36,
    addr:"오리"
   };
    const styleCss={ //camelCase문법으로 css작성
        color:"white",
        backgroundColor:"blue"
    }
    //버튼 클릭했을때 호출될 함수
    const sayHello = ()=>{
        console.log("안녕하세요~~");
    }

    return(
        <>
        <h3 id = "a" className="b" style={{color:"red" , border:"solid blue 5px"}}>JSX 문법 TEST</h3>
        <h3 className="b" style={styleCss}>메시지 : {message}</h3>
        이름 : {student.name} <br/>
        나이 : {student.age} <br/>
        주소 : {student.addr} <br/>
        <button onClick={sayHello}>클릭</button>
        <button onClick={()=>console.log("안뇽")}>클릭</button>
        <hr/>
        {student.age > 18 ? <div>성인</div> : <div>미성년자</div>}
        <hr/>   
        {student.age >18 && <h4 style={{color:"orange"}}>환영합니다.</h4>}
        {/* null undefined true  jsx 문법에서 실행되지 않는다. */}
        null : {null} <br/>
        undefined : {undefined} <br/>
        true : {true} <br/>
        </>
    )
}

export default JSX_Test; //외부에서 컴포넌트 import로 사용가능