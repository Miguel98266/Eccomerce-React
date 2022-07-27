import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../shared/Header'

export const SharedHeadLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        
    </>
  )
}
