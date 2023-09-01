import { Button } from "./ui/button";
import LanguageToggle from "./languageToggle";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileSidebar = () => {
  return (
    <>
      <div className="text-black-50 hidden md:flex">
        <Button variant="link" className="text-black-50">
          PROJELER
        </Button>
        <Button variant="link" className="text-black-50">
          HAKKIMIZDA
        </Button>
        <Button variant="link" className="text-black-50">
          İLETİŞİM
        </Button>
        <LanguageToggle />
      </div>
      <div className="block md:hidden text-black-50">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="p-0 bg-black-800 pt-10 w-32">
            <Button variant="link" className="text-black-50">
              PROJELER
            </Button>
            <Button variant="link" className="text-black-50">
              HAKKIMIZDA
            </Button>
            <Button variant="link" className="text-black-50">
              İLETİŞİM
            </Button>
            <LanguageToggle />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileSidebar;
