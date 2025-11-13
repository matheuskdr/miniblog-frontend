import { api } from "@/lib/axios";
import { Posts } from "@/types/posts";

export const getPost = async (id: number) => {
    try {
        const response = await api.get(`/post/${id}`);
        if (response.status === 200) {
            return response.data.post as Posts;
        }
    } catch {}
    return null;
};
