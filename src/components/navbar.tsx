import { useNavigate } from "react-router-dom";
import DtLogo from "./dtLogo";
import MobileSidebar from "./mobile-sidebar";
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full z-50 flex justify-between md:justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <h1 className="block text-xl text-primary md:text-3xl font-bold cursor-pointer" onClick={() => navigate('')}>
          duzagactasarim
        </h1>
      </div>
      {/* <div className="ml-auto mr-auto md:ml-0 md:mr-0 d-flex">
        <Button variant="ghost" size="default" onClick={() => navigate('')}>
          <DtLogo fill={"white"} width="48px" height="48px" />
          </Button>
      </div> */}
      <div className="flex justify-end gap-x-3 text-primary">
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Navbar;
