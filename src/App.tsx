import './styles/globals.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter } from 'react-router-dom'
import Router from './pages/router'
import Navbar from './components/navbar'
import { useState, useEffect } from 'react'
import Loader from './components/loader'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilen bir veri yükleme işlemi
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        {loading ? <Loader /> : (
          <>
            <Navbar />
            <Router />
          </>
        ) }
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
