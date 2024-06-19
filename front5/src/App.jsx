import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignUp } from './SignUp'
import { UserList } from './UserList'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([
    { id: 101, name: "Goharik", surname: "Asatryan", login: "gohar@mail.com", password: "123456" },
    { id: 102, name: "Manan", surname: "Tovmasyan", login: "manan@mail.com", password: "456456" },
    { id: 103, name: "Ofelya", surname: "Karapetyan", login: "ok@mail.com", password: "123123" },
    { id: 105, name: "Alvard", surname: "Avagyan", login: "alvard@mail.com", password: "147258" },
  ])

  const handleAdd = obj => {
    setUsers([...users, { ...obj, id: Date.now() }])

  }
  return (
    <>
      <UserList users={users} />
      <SignUp onAdd={handleAdd} users={users} />

    </>
  )
}

export default App
