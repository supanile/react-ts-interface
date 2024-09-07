import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

interface ApiResponse {
  id: number;
  title: string;
  completed: boolean;
}

async function fetchData(): Promise<ApiResponse[]>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data: ApiResponse[] = await response.json();
  return data;
}

fetchData().then((todos) => {
  todos.forEach(todo => {
    console.log(`${todo.title} - Completed: ${todo.completed}`)
  })
})

interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface User {
  name: string;
  age: number;
  address: Address;
}
const user: User = {
  name: "John Noi",
  age: 400,
  address: {
    street: "123 Prawet Surin",
    city: "Bangkok",
    postalCode: "10260"
  }
}

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    alert("Button Clicked!")
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button label='Click Me' onClick={handleClick}/>
    </>
  )
}

export default App
