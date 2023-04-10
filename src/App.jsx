import { useState } from 'react'
import HeaderReact from './layouts/HeaderReact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderReact/>
    </div>
  )
}

export default App
