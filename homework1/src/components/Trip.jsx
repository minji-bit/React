import React from 'react';
import hawaii from './assets/Hawaii.jpg';

const Trip = () => {
    return (
        <div>
            <h3>이번 여름에 바다가 있는 테마 여행을 시작합니다.</h3>
            <img src={hawaii}/>
        </div>
    );
};

export default Trip;