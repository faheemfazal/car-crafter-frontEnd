import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AnimateRouters from "components/AnimateRouters";

function userRouter() {
  return (
    <BrowserRouter>
    <AnimateRouters />
  </BrowserRouter>
  )
}

export default userRouter
