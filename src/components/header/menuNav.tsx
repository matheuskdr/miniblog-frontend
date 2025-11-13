"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { logout } from "@/actions/logout";

export const MenuNav = () => {
    const [isLogged, setIsLogged] = useState<any>(null);

    const isAuthenticated = useAuthCheck();

    useEffect(() => {
        setIsLogged(isAuthenticated);
    }, [isAuthenticated]);

    const handleLogout = () => {
        logout();
        setIsLogged(false);
    };

    return (
        <NavigationMenu className="max-w-full overflow-x-hidden py-10">
            <NavigationMenuList className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                {!isLogged ? (
                    <>
                        <Button className="cursor-pointer">
                            <NavigationMenuItem>
                                <Link href="/register">Cadastre-se</Link>
                            </NavigationMenuItem>
                        </Button>
                        <Button
                            className="cursor-pointer"
                            variant={"outline"}
                            asChild
                        >
                            <NavigationMenuItem>
                                <Link href="/login">Login</Link>
                            </NavigationMenuItem>
                        </Button>{" "}
                    </>
                ) : (
                    <>
                        <Button className="cursor-pointer">
                            <NavigationMenuItem>
                                <Link href="/user">Minhas postagens</Link>
                            </NavigationMenuItem>
                        </Button>
                        <Button className="cursor-pointer">
                            <NavigationMenuItem>
                                <Link href="/create-post">
                                    Criar nova postagem
                                </Link>
                            </NavigationMenuItem>
                        </Button>
                        <Button
                            className="cursor-pointer"
                            variant="outline"
                            onClick={() => handleLogout()}
                        >
                            <NavigationMenuItem>Sair</NavigationMenuItem>
                        </Button>{" "}
                    </>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
