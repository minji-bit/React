import React from 'react';

// const Book = (props) => {
//     console.log(props);
//     return (
//         <>
//           <h2>이 책은 {props.bookName} 책입니다.</h2>
//           <h4>이 책의 총 페이지 수는 {props.pageNum} 페이지로 이뤄져 있습니다.</h4>  
//         </>
//     );
// };

//구조분해 할당으로 props
const Book = ({bookName="기본책",pageNum} ) => {
    
    return (
        <>
          <h2>이 책은 {bookName} 책입니다.</h2>
          <h4>이 책의 총 페이지 수는 {pageNum} 페이지로 이뤄져 있습니다.</h4>  
        </>
    );
};


export default Book;