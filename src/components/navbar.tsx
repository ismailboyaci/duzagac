
import DtLogo from './dtLogo'
import MobileSidebar from './mobile-sidebar'

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-end md:justify-between items-center py-2 px-4 border-b border-primary/10 bg-black-950 h-16">
    <div className="flex items-center">
       <h1 className='hidden md:block text-xl text-black-50  md:text-3xl font-bold'>
          düzagaç
        </h1>
    </div>
    <div className='ml-auto mr-auto md:ml-0 md:mr-0'>
      <DtLogo fill={"white"} width='48px' height='48px'/>
    </div>
    <div className="flex justify-end gap-x-3 text-black-50">
    <MobileSidebar />
    </div>
    
  </div>
  )
}

export default Navbar
