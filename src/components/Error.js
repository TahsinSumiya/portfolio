import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <h2>Oops! Wrong page</h2>
      <Link to="/" >
        back Home
      </Link>
      </>
  )
}

export default Error