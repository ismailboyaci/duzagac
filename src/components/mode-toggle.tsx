import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"
import { useAppSelector } from "@/redux/hooks"
import { themeSelector } from "@/redux/themeSlice/themeSlice"

export function ModeToggle() {
  const { setTheme } = useTheme();
  const selectedTheme = useAppSelector(themeSelector);

  const [button, setButton] = useState<React.ReactNode>(
    <Button variant="ghost" size="icon" onClick={() => setTheme('light')}>
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );

  useEffect(() => {
    if (selectedTheme.selectedTheme === 'light') {
      setTimeout(() => {
        setButton(<Button variant="ghost" size="icon" onClick={() => setTheme('dark')}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>);
      }, 0);
    } else {
      setTimeout(() => {
        setButton(<Button variant="ghost" size="icon" onClick={() => setTheme('light')}>
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>);
      }, 0);
    }
  }, [selectedTheme]);

  return (
    <>
      {button}
    </>
  );
}
