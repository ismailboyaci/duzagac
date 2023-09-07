
import './styles/globals.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter } from 'react-router-dom'
import Router from './pages/router'
import Navbar from './components/navbar'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Navbar />
    <Router/>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
 