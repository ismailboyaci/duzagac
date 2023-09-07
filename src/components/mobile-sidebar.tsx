import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { useNavigate } from "react-router-dom";

const MobileSidebar = () => {

  const navigate = useNavigate();

  const redirectPage = (redirectParam: string) => {
    navigate(redirectParam);
  }
  return (
    <>
      <div className="text-primary hidden md:flex">
        <Button variant="link" className="text-primary" onClick={() => redirectPage('projects')}>
          PROJELER
        </Button>
        <Button variant="link" className="text-primary" onClick={() => redirectPage('about')}>
          HAKKIMIZDA
        </Button>
        <Button variant="link" className="text-primary" onClick={() => redirectPage('contact')}>
          İLETİŞİM
        </Button>
        <ModeToggle />
        {/* <LanguageToggle /> */}
      </div>
      <div className="block md:hidden text-primary">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetClose>
          <SheetContent side="right" className="p-0 bg-primary/10 pt-10 w-32" >
            <Button variant="link" className="text-primary" onClick={() => redirectPage('projects')}>
              PROJELER
            </Button>
            <Button variant="link" className="text-primary" onClick={() => redirectPage('about')}>
              HAKKIMIZDA
            </Button>
            <Button variant="link" className="text-primary" onClick={() => redirectPage('contact')}>
              İLETİŞİM
            </Button>
            <div className="ml-2"><ModeToggle /></div>
            {/* <LanguageToggle /> */}
          </SheetContent>
          </SheetClose>
        </Sheet>
      </div>
    </>
  );
};

export default MobileSidebar;
