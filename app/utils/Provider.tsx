"use client"

import React from "react"
import { ThemeProvider } from "next-themes"
import { Interface } from "readline"

interface Props{
    children: React.ReactNode
}

  
 export const Provider = ({children} : Props) => {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>
  }
  
  export default Provider
  
