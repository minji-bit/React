import React from 'react';
import Trip from './Trip';

const Article = ({title,body}) => {
   
    return (
        <div>
            <h2>{title}</h2>
            <p>이번 여름에 바다가 있는 테마 여행을 시작합니다.</p>
            <p>{body}</p>

            <Trip/>
        </div>
    );
};

export default Article;