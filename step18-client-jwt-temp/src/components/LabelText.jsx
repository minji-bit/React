import { useState } from "react";
import "./LabelText.css"

const LabelText =({text, name, value:initialValue,changeValue})=>{
    const [value, setValue] = useState(initialValue || "");
    const onChangeCheck = (e)=>{
        setValue(e.target.value);
        //여기서 axios로 입력된 값을 가지고 서버로 중복 체크 요청해야함
        changeValue(e); //부모쪽의 함수를 호출한다.
    }
    return (
        <div className="LabelText" >
            <label className="label">{text}</label>
            <input className={`${value=="" ? 'input' : 'input_disabled' }`} 
            type={`${name==="pwd" ? "password" : "text"}`}  name={name}  value={value}  
            onChange={onChangeCheck}/>
        </div>
    )
}
 
  export default LabelText;