"use client";

import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import Link from "next/link";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { useEffect } from "react";

const formSchema = z.object({
    email: z.email("E-mail inválido."),
    password: z.string().min(6, "Senha inválida."),
});

export const LoginForm = () => {
    const router = useRouter();

    const isAuthenticated = useAuthCheck();

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated, router]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const res = await login(data);
        if (res === null) {
            alert("Usuário ou senha inválidos!");
        } else {
            router.push("/");
        }
    };

    return (
        <Card className="w-[300px] md:w-full my-10 max-w-sm">
            <CardHeader>
                <CardTitle>Faça login na sua conta</CardTitle>
                <CardDescription>
                    Preencha os dados para entrar uma conta
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail:</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Digite seu e-mail"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Senha:</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Digite sua senha"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-between items-center">
                            <Button type="submit" className="cursor-pointer">
                                Entrar
                            </Button>
                            <Link
                                href="/register"
                                className="underline text-base"
                            >
                                Não possui uma conta?
                            </Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
