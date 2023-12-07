import React, { useEffect, useState } from 'react'

export const Window = () => {
const [size,setSize] = useState(window.innerWidth)
const handleSize = ()=>{
    
}
window.addEventListener('resize',()=>{
setSize(window.innerWidth)
})

useEffect(()=>{
window.addEventListener('resize',handleSize);
return ()=>{
window.removeEventListener('resize',()=>{
})
}
})

return (
<>
    <div className="container text-center text-capitalize">
        <h1>Window Size : {size}px </h1>
    </div>
</>
)
}