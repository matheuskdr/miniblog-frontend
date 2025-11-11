"use client";

import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../ui/alert-dialog";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    title: z.string().min(2),
    description: z.string(),
    body: z.string(),
    image: z
        .any()
        .refine(
            (file) => file instanceof globalThis.File,
            "Envie uma imagem válida"
        )
        .optional(),
});

const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
};

type Props = {
    content: string;
    edit?: boolean;
    delete?: boolean;
};

export const PostCard = (data: Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            body: "",
            image: undefined,
        },
    });

    return (
        <div>
            <Card className="max-w-[450px]">
                <CardHeader>
                    <CardTitle className="text-base lg:text-xl">
                        A Torre Eiffel encolhe no inverno!
                    </CardTitle>
                    <CardDescription className="flex gap-3">
                        <div className="text-xs lg:text-base">Matheus</div>
                        <div className="text-xs lg:text-base">11/03/1999</div>
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-3">
                    <div className="text-sm lg:text-base">{data.content}</div>
                    <Image
                        src="https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg?auto=format&q=90&crop=faces&fit=crop"
                        alt=""
                        width={300}
                        height={100}
                    />
                </CardContent>
                <CardFooter className="flex justify-around">
                    <Button className="cursor-pointer">
                        <Link href="/post">Leia mais...</Link>
                    </Button>
                    {data.edit && (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="cursor-pointer"
                                >
                                    Editar
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Editar Postagem</DialogTitle>
                                </DialogHeader>
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="space-y-8"
                                    >
                                        <FormField
                                            control={form.control}
                                            name="title"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Titulo:
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder=""
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="description"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Descrição:
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder=""
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="image"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Selecione uma imagem:
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) =>
                                                                field.onChange(
                                                                    e.target
                                                                        .files?.[0]
                                                                )
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="body"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Conteudo:
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder=""
                                                            {...field}
                                                        ></Textarea>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="flex justify-between items-center">
                                            <Button
                                                type="submit"
                                                className="cursor-pointer"
                                            >
                                                Confirmar
                                            </Button>
                                            <DialogClose asChild>
                                                <Button variant="outline">
                                                    Cancelar
                                                </Button>
                                            </DialogClose>
                                        </div>
                                    </form>
                                </Form>
                            </DialogContent>
                        </Dialog>
                    )}
                    {data.delete && (
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button
                                    variant="destructive"
                                    className="cursor-pointer"
                                >
                                    <DeleteOutlineIcon />
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Você tem certeza?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Esta ação não pode ser desfeita. Isso
                                        irá excluir permanentemente e remover
                                        sua postagem de nossos servidores.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>
                                    <AlertDialogAction>
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
};
