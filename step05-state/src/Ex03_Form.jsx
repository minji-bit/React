import React, { useState } from 'react';

const Ex03_Form = () => {
    const [profile,setProfile]=useState({
        name:"",
        age:"",
        email:""

    }); //object

    const inputUpdate=(e)=>{
        console.log(e.target.name);
            // setProfile({
            //     ...profile,
            //     [e.target.name]:e.target.value
            // });
            const {name,value,type} = e.target; //구조분해할당
            console.log(name,value,type);
            setProfile({
                ...profile, //spread 문법
                [name]:value
            });
    }
    return (
        <div>
           <h2>폼 입력값 state Test - Profile</h2>
            이름: <input type="text" name="name" value={profile.name} onChange={inputUpdate} />
            <br></br>
            나이: <input type="text" name="age" value={profile.age} onChange={inputUpdate} />
            <br></br>
            이메일: <input type="text" name="email" value={profile.email} onChange={inputUpdate} /> 
        </div>
    );
};

export default Ex03_Form;