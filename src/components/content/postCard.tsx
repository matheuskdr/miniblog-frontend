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
    id: number;
    createdAt: Date;
    imageUrl: string | null;
    title: string | null;
    content: string | null;
    author: string;
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
                        {data.title}
                    </CardTitle>
                    <CardDescription className="flex gap-1">
                        <div className="text-xs lg:text-base">
                            {data.author}
                        </div>
                        <div className="text-xs lg:text-base">
                            {new Date(data.createdAt).toLocaleDateString()}
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-3">
                    <div className="text-sm lg:text-base">{data.content}</div>
                    <div className="relative w-[300px] h-[200px]">
                        <Image
                            src={data.imageUrl ?? "/placeholder.png"}
                            alt={data.title ?? "Imagem do post"}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-around">
                    <Button className="cursor-pointer">
                        <Link href={`/post/${data.id}`}>Leia mais...</Link>
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
