import React from 'react'
import notFoundImg from "../assets/404.svg"
import logo from "/icon/logo.webp"
const NotFound = () => {
  return (
    <section className="h-[100vh] w-[100vw] flex items-center justify-center flex-col overflow-hidden">
      <img src={logo} alt="logo"/>
      <img src={notFoundImg} alt="404" />
    </section>
  )
}

export default NotFound