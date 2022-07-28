import React from 'react'
import {Outlet} from 'react-router-dom'
import {Header} from '../shared/Header'

export const SharedHeadLayout = ({search,setSearch}) => {
  return (
    <>
        <Header search={search} setSearch={setSearch} />
        <Outlet/>
        
    </>
  )
}
