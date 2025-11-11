"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { useState } from "react";

export const MenuNav = () => {
    const [isLogged, setIsLoggedd] = useState<boolean>(true);
    return (
        <NavigationMenu className="max-w-full overflow-x-hidden py-10">
            <NavigationMenuList className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                {isLogged ? (
                    <>
                        <Button>
                            <NavigationMenuItem>
                                <Link href="/register">Cadastre-se</Link>
                            </NavigationMenuItem>
                        </Button>
                        <Button
                            variant={"outline"}
                            onClick={() => setIsLoggedd(false)}
                            asChild
                        >
                            <NavigationMenuItem>
                                <Link href="/">Login</Link>
                            </NavigationMenuItem>
                        </Button>{" "}
                    </>
                ) : (
                    <>
                        <Button>
                            <NavigationMenuItem>
                                <Link href="/user">Minhas postagens</Link>
                            </NavigationMenuItem>
                        </Button>
                        <Button>
                            <NavigationMenuItem>
                                <Link href="/create-post">
                                    Criar nova postagem
                                </Link>
                            </NavigationMenuItem>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setIsLoggedd(true)}
                        >
                            <NavigationMenuItem>
                                <Link href="/">Sair</Link>
                            </NavigationMenuItem>
                        </Button>{" "}
                    </>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
