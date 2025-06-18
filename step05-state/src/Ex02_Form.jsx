import React, { useState } from 'react';

const Ex02_Form = () => {
    const [name,setName]=useState("민지");
    const [age,setAge]=useState(0);
    const inputName=(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);

        //state 변경하고 rerendering이 된다.
        setName(e.target.value);

    }
    return (
        <div>
            <h1>폼 입력 값 - state test</h1>
            이름 : <input type="text" name="userName" value={name} onChange={inputName}/><br/>
            나이 : <input type='text' name='age' value={age!==0 && age!=="0"? age:""} onChange={(e)=>{setAge(e.target.value)}}/>

        </div>
    );
};

export default Ex02_Form;