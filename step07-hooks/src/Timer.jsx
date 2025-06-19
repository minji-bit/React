import React, { useEffect } from 'react';

const Timer = () => {
    useEffect(()=>{
        console.log("Timer useEffect 실행됨!!");

       const timerStop= setInterval(()=>{
            console.log("타이머 실행중입니다.");

        },1000)

        //정리작업(unMount될 때 자원 정리한다.)
        return ()=>{
            console.log("자원을 정리합니다...");
            clearInterval(timerStop);
        }
    },[]);
    return (
        <div>
           <span>타이머를 시작합니다. -console 확인해주세요!!</span> 
      </div>
    );
};

export default Timer;<span>타이머를 시작합니다. -console 확인해주세요!!</span>