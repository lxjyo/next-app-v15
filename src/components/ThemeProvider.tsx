'use client'
 
import { createContext, useContext } from 'react'
 
export const ThemeContext = createContext('')
 
export default function ThemeProvider({
  value,
  children,
}: {
  value: string
  children: React.ReactNode
}) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () =>  useContext(ThemeContext)