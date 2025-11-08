import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";

export const MenuNav = () => {
    return (
        <NavigationMenu className="max-w-full overflow-x-hidden">
            <NavigationMenuList className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href="/"
                            className="text-xs sm:text-base md:text-lg lg:text-2xl hover:underline"
                        >
                            Cadastre-se
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href="/"
                            className="text-xs sm:text-base md:text-lg lg:text-2xl hover:underline"
                        >
                            Login
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};
