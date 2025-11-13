import { PostCard } from "@/components/content/postCard";
import { MenuNav } from "@/components/header/menuNav";

export default function Home() {
    return (
        <div className="w-full max-w-7xl min-h-[calc(100vh-228px)] flex flex-col justify-center items-center ">
            <MenuNav />
            <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                <PostCard
                    edit={true}
                    delete={true}
                    content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse expedita aliquam sapiente delectus, rerum quod consequuntur ratione nihil, repellat a cupiditate provident. Magni dicta eveniet laboriosam excepturi quasi molestiae. Aliquam?"
                />
                <PostCard
                    edit={true}
                    delete={true}
                    content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse expedita aliquam sapiente delectus, rerum quod consequuntur ratione nihil, repellat a cupiditate provident. Magni dicta eveniet laboriosam excepturi quasi molestiae. Aliquam?"
                />
                <PostCard
                    edit={true}
                    delete={true}
                    content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse expedita aliquam sapiente delectus, rerum quod consequuntur ratione nihil, repellat a cupiditate provident. Magni dicta eveniet laboriosam excepturi quasi molestiae. Aliquam?"
                />
                <PostCard
                    edit={true}
                    delete={true}
                    content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse expedita aliquam sapiente delectus, rerum quod consequuntur ratione nihil, repellat a cupiditate provident. Magni dicta eveniet laboriosam excepturi quasi molestiae. Aliquam?"
                />
                <PostCard
                    edit={true}
                    delete={true}
                    content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse expedita aliquam sapiente delectus, rerum quod consequuntur ratione nihil, repellat a cupiditate provident. Magni dicta eveniet laboriosam excepturi quasi molestiae. Aliquam?"
                />
            </nav>
        </div>
    );
}
