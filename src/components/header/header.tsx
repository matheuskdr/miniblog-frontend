import { Logo } from "./logo";
import { ModeToggle } from "../modeToggle";
import { MenuNav } from "./menuNav";

export const Header = () => {
    return (
        <header className="w-full flex flex-col sm:mt-10 sm:justify-center items-start p-2 gap-3 overflow-x-hidden">
            <div className="w-full flex justify-between items-center sm:justify-center sm:flex-col ">
                <Logo />
                <ModeToggle />
            </div>
            <MenuNav />
        </header>
    );
};
