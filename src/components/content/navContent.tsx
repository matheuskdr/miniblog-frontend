import { PostCard } from "./postCard";

export const NavContent = () => {
    return (
        <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <PostCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum he printing and type he printing and type he printing and type he printing and type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum he printing and type he printing and type he printing and type he printing and type" />
            <PostCard content="inting and typesetting industry. Lorem Ipsum he printing and type" />
            <PostCard content="Lorem Ipsum is sirinting and typesetting  he printing and type industry. Lorem Ipsum Lorem Ipsum is sirinting and typesetting  he printing and type industry. Lorem Ipsum" />
            <PostCard content="Lorem Ipsum is simply dummy text of the printing " />
        </nav>
    );
};
