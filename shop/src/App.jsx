import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import './App.css'
import './index.css'
import data from './db/fruit';
import { useState } from 'react';
import Product from './components/Product';

function App() {
   const [fruit] = useState(data);
    console.log(fruit[0].price);


  return (
   
  <div className="App">
 <>
 <Navbar bg="dark" variant="dark">
 <Container>
  <Navbar.Brand href="#home">과일농장</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="#home">홈으로</Nav.Link>
    <Nav.Link href="#detail">상세페이지</Nav.Link>
    <Nav.Link href="#cart">장바구니</Nav.Link>
    </Nav>
 </Container>
 </Navbar>

 <div className="slider"></div>
 <div className="container">
 <div className="row">

 {
 fruit.map((ele,i)=>{ return( <Product fruit={fruit[i]} i={i} key={data[i].id} />
 ) }) }
 </div>
</div>
 </>

 </div>

  )
}

export default App
