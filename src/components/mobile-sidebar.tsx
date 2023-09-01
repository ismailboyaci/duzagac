
import { Button } from './ui/button'
import LanguageToggle from './languageToggle'
import { Menu } from 'lucide-react'

const MobileSidebar = () => {
  return (
   <>
    <div className='text-black-50 hidden md:flex'>
      <Button variant="link" className='text-black-50'>PROJELER</Button>
      <Button variant="link" className='text-black-50'>HAKKIMIZDA</Button>
      <Button variant="link" className='text-black-50'>İLETİŞİM</Button>
      <LanguageToggle />
    </div>
    <div className='block md:hidden'>
        <Menu />
    </div>
   </>
  )
}

export default MobileSidebar
