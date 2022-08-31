import React, { useState } from "react"

const ButtonClick = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/validation?n_splits=5&proba_threshold=0.5")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Users</button>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li>{user.scores_std}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ButtonClick