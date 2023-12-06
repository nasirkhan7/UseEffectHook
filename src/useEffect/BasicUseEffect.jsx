import React, { useEffect, useState } from 'react'

const BasicUseEffect = () => {
    const [test,setTest] = useState(0)
    useEffect(()=>{
        console.log('Hello world');
    })
  return (
    <>
        <div className="container text-center text-capitalize">
            <h1>{test}</h1>
            <button className="btn btn-dark">
                Click
            </button>
        </div>
    
    </>
    
  )
}

export default BasicUseEffect