import { getPost } from "@/actions/getPost";
import { MenuNav } from "@/components/header/menuNav";
import Image from "next/image";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function Home({ params }: Props) {
    const { id } = await params;
    const post = await getPost(parseInt(id));

    return (
        <div className="w-full max-w-7xl min-h-[calc(100vh-228px)] flex flex-col items-center px-5">
            <div className="my-10">
                <MenuNav />
            </div>
            <h1 className="sm:text-3xl lg:text-4xl font-extrabold mb-10">
                {post?.title}
            </h1>
            <div className="relative w-full h-96">
                <Image
                    src={post?.imageUrl || ""}
                    alt=""
                    fill
                    className="object-cover rounded-xl"
                />
            </div>
            <h2 className="my-10 text-base sm:text-xl lg:text-2xl">
                {post?.body}
            </h2>
        </div>
    );
}
