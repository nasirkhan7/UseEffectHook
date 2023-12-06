import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BasicUseEffect from './useEffect/BasicUseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicUseEffect />
    </>
  )
}

export default App
