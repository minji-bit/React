import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h2>User페이지입니다. {params.id}</h2>
        </div>
    );
};

export default User;