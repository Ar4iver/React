import { useState } from 'react'
import React from 'react'

function Login() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const [data, setData] = useState({ username: '', password: '' })

  function handleFormSubmit(event) {
    event.preventDefault()
    // console.log(event.target.username.value)
    // console.log(event.target.password.value)

    // const userData = {
    //   username,
    //   password,
    // }

    console.log(data)
    alert(JSON.stringify(data))
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value })
  }

  return (
    <React.Fragment>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            // onChange={(e) => setUsername(e.target.value)}
            // onChange={(e) => setData({ ...data, username: e.target.value })}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            // onChange={(e) => setData({ ...data, password: e.target.value })}
            onChange={(e) => handleInputChange(e, 'password')}
            value={data.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  )
}

export default Login
