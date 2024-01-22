import React from 'react'
import { useState } from 'react';

function Card({data,navClick,decrease}) {

  const [buttonText, setText] = useState("Add to Cart");

  function handleClick()
  {
    buttonText === 'Add to Cart' ? navClick() : decrease();
    buttonText === 'Add to Cart' ? setText("Remove From Cart") : setText("Add to Cart");
  }

  return (
    
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card m-3 " style={{width: "18rem"}}>
                <img src={data.image} className="card-img-top rounded-4" style={{height: "20rem"}} alt="..."/>
                  <div className="card-body text-center ">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text ">Price: Rs:{data.price}</p>
                  <p className='card-text overflow-auto' style={{height: "50px"}}>{data.description}</p>
                  <button onClick={() => handleClick()} className="btn btn-dark mt-3">{buttonText}</button>
                </div>
              </div>
            </div>
  )
}

export default Card