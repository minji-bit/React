import React, { createContext, useState } from 'react';
import Child01 from './Child01';


export const GlobalContext = createContext();

const Context01 = () => {
    const [list,setList] = useState([{id:1,name:"민지"},{id:2,name:"미미"},{id:3,name:"나영"}]);
    const btnClick01 = ()=>{
        console.log("btnClick01 호출됨...");
    }
    const btnClick02 = ()=>{
        console.log("btnClick02 호출됨...");
    }

    return (
        <GlobalContext value={{list:list,setList,btnClick01:btnClick01,btnClick02}}>
            <div style={{border:"1px red solid", padding:"10px"}}>
                <h1>useContext Test</h1>
                <h3 onClick={btnClick01}>클릭</h3>
                {list.map(user=><div key={user.id}>{user.id} : {user.name}</div>)}
                <Child01/>
            </div>
        </GlobalContext>
    );
};

export default Context01;