"use client";

import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import AuthModal from "@/components/Helper/AuthModal/AuthModal";

const ResponsiveNav = () => {

  const [showNav,setShownNav]=useState(false)
  const [showAuth, setShowAuth] = useState(false);

  const showNavHandler =()=>setShownNav(true)
  const hideNavHandler =()=>setShownNav(false)

  const openAuthHandler = () => setShowAuth(true);
  const closeAuthHandler = () => setShowAuth(false);


  return (
  <>
  <Nav openNav={showNavHandler} openAuth={openAuthHandler}/>
  <MobileNav showNav ={showNav} closeNav={hideNavHandler}/>
  <AuthModal show={showAuth} onClose={closeAuthHandler} />
  </>
  )
}

export default ResponsiveNav
