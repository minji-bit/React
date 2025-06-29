import { useEffect, useState } from "react";
import "./LabelText.css"

const LabelText =({text, name, initValue,changeValue,readOnly})=>{
    const [value, setValue] = useState(initValue || "");

    useEffect(()=>{
        readOnly && setValue(localStorage.getItem("name"));
    });
    useEffect(()=>{
        setValue(initValue);
    },[initValue]);

    const onChangeCheck = (e)=>{
        setValue(e.target.value);
        //여기서 axios로 입력된 값을 가지고 서버로 중복 체크 요청해야함
        changeValue(e); //부모쪽의 함수를 호출한다.
    }
    return (
        <div className="LabelText" >
            <label className="label">{text}</label>
            <input className={`${initValue ? 'input_disabled':'input'   }`} 
            type={`${name==="pwd" ? "password" : "text"}`}  name={name}  value={value} 
            readOnly={readOnly?true:undefined} 
            onChange={onChangeCheck}/>
            </div>
    )
}
 
  export default LabelText;