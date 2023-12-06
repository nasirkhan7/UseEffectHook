import React, { useState } from 'react'

export const Window = () => {
    const [size,setSize] = useState(window.innerWidth)
    window.addEventListener('resize',()=>{
        setSize(window.innerWidth)
    })
  return (
    <>
    <div className="container text-center text-capitalize">
        <h1>Window Size : {size}px </h1>

    </div>
    </>
  )
}
