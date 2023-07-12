import React from 'react'
import { useParams } from 'react-router-dom';


const UserPage = () => {
  let { id } = useParams();

  return (
    <div>
      User page {id}
    </div>
  )
}

export default UserPage
