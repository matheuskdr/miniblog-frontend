import { api } from "@/lib/axios";
import { Posts } from "@/types/posts";
import axios from "axios";

export const getPosts = async () => {
    try {
        const response = await api.get("/posts");
        if (response.status === 200) {
            return response.data.post as Posts[];
        }
    } catch {}
    return [];
};
