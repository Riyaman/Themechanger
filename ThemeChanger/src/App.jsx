import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import { ThemeProvider } from './context/Theme'
import ThemeButton from './Component/ThemeButton'
import Card from './Component/Card'

function App() {
 const [themeMode, setThemeMode] = useState("light")

 const lightTheme = () =>{
  setThemeMode("light")
 }

 const darkTheme = () =>{
  setThemeMode("dark")
 }

 useEffect(()=>{
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
 }, [themeMode])
  return (
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

    <div className='flex flex-wrap min-h-screen items-center'>
      <div className='w-full'>
      <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
<ThemeButton/>
      </div>
    <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
      <Card/>
      </div>
      </div>
    </div>
    </ThemeProvider>
    
  )
}

export default App
