import { getPosts } from "@/actions/getPosts";
import { PostCard } from "./postCard";
import { Posts } from "@/types/posts";

export const NavContent = async () => {
    const posts: Posts[] = await getPosts();

    return (
        <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts && posts.length > 0 ? (
                posts.map((post) => {
                    return (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            createdAt={post.createdAt}
                            content={post.content}
                            imageUrl={post.imageUrl}
                            author={post.author.name}
                        />
                    );
                })
            ) : (
                <p>Nenhum post encontrado.</p>
            )}
        </nav>

        /* <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <PostCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum he printing and type he printing and type he printing and type he printing and type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum he printing and type he printing and type he printing and type he printing and type" />
            <PostCard content="inting and typesetting industry. Lorem Ipsum he printing and type" />
            <PostCard content="Lorem Ipsum is sirinting and typesetting  he printing and type industry. Lorem Ipsum Lorem Ipsum is sirinting and typesetting  he printing and type industry. Lorem Ipsum" />
            <PostCard content="Lorem Ipsum is simply dummy text of the printing " />
        </nav> */
    );
};
