import React from 'react';
import Book from './components/Book';

const Ex02_Library = () => {
    return (
        <>
            <Book  pageNum={100}/>
            <Book bookName="HTML" pageNum={150}/>
            <Book bookName="React" pageNum={250}/>
        </>
    );
};

export default Ex02_Library;