import { useState } from 'react'
import Page from './Page'
import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Page />
    </div>
  )
}

export default App
