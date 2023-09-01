import { useState } from "react";
import { US, TR } from "country-flag-icons/react/3x2";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("TR");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-black-50">
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-0">
        <DropdownMenuItem onClick={() => setLanguage("TR")}>
          <TR title="Turkey" className="w-8" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("EN")}>
          <US title="United States" className="w-8" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
