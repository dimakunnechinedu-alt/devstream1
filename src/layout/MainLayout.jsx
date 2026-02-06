import React from 'react'
import Header from "../component/Header"
import Footer from "../component/Footer"
import {Outlet} from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Header/>
      <main>
         <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout