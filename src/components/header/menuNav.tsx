import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

export const MenuNav = () => {
    return (
        <NavigationMenu className="max-w-full overflow-x-hidden">
            <NavigationMenuList className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <Button>
                    <NavigationMenuItem>
                        <Link href="/register">Cadastre-se</Link>
                    </NavigationMenuItem>
                </Button>
                <Button variant={"outline"}>
                    <NavigationMenuItem>
                        <Link href="/login">Login</Link>
                    </NavigationMenuItem>
                </Button>
            </NavigationMenuList>
        </NavigationMenu>
    );
};
