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
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    name: z.string().min(2, "Precisa ter no minimo 2 caracteres"),
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "Precisa ter no minimo 6 caracteres."),
});

export const RegisterForm = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const user = await register(data);
        if (user === null) {
            alert("erro! E-mail já cadastrado");
        } else {
            router.push("/");
        }
    };

    return (
        <Card className="w-[300px] md:w-full my-10 max-w-sm">
            <CardHeader>
                <CardTitle>Crie sua conta</CardTitle>
                <CardDescription>
                    Preencha os dados para cadastrar uma conta
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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome:</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Digite seu nome"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                                Cadastrar
                            </Button>
                            <Link href="/login" className="underline text-base">
                                Já possui uma conta?
                            </Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
