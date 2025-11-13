import { api } from "@/lib/axios";
import { User } from "@/types/user";

export const register = async (data: User) => {
    try {
        const response = await api.post("/auth/register", data);
        if (response.status === 201 && response.data.user) {
            return response.data.user;
        }
    } catch {}
    return null;
};
