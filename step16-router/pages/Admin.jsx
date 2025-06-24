import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Admin = () => {
    const [param] = useSearchParams();
    console.log(param);
    return (
        <div>
            <h2>Admin페이지입니다. - {param.get("name")} / {param.get("age")}</h2>
        </div>
    );
};

export default Admin;