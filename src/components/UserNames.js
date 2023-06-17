import React from 'react'

const UserNames = ({ user }) => {
  return (
    <div>{user.name.first} {user.name.last}</div>
  )
}

export default UserNames