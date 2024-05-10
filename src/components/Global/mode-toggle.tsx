"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme } = useTheme()

    const lightModeClicked=()=>{
        setTheme("dark")
    }

    const darkModeClicked = () => {
        setTheme("light")
    }

    return (
        <Button variant="ghost" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 hover:text-amber-400 dark:hover:text-amber-400" onClick={lightModeClicked} />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 hover:text-amber-400 dark:hover:text-amber-400 hover:transition-all" onClick={darkModeClicked} />
                    <span className="sr-only">Toggle theme</span>
        </Button>
        // <DropdownMenu>
        //     <DropdownMenuTrigger asChild>
        //         <Button variant="outline" size="icon">
        //             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        //             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        //             <span className="sr-only">Toggle theme</span>
        //         </Button>
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent align="end">
        //         <DropdownMenuItem onClick={() => setTheme("light")}>
        //             Light
        //         </DropdownMenuItem>
        //         <DropdownMenuItem onClick={() => setTheme("dark")}>
        //             Dark
        //         </DropdownMenuItem>
        //         <DropdownMenuItem onClick={() => setTheme("system")}>
        //             System
        //         </DropdownMenuItem>
        //     </DropdownMenuContent>
        // </DropdownMenu>
    )
}
