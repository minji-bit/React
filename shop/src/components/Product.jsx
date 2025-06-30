import React from "react";
const Product = (props) => { return ( <div className="col-md-4" style={{marginBottom:"50px"}}>
 <img src={props.fruit.imgUrl} width="80%" />
 <h5 style={{marginTop:"10px"}}>{props.fruit.title}</h5>
 <p>{props.fruit.content}</p>
 <span>{props.fruit.price}</span>
 </div>
 );
};
export default Product;
