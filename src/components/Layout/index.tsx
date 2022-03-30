import React from 'react'
import {Outlet} from "react-router-dom"
type Props = {}

export default function Layout({}: Props) {
  return (
    <>
    
    <main style={{
        minHeight: "100vh"
    }}>
    <Outlet />
    </main>
    
    </>
  )
}