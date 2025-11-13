import { api } from "@/lib/axios";
import { UserLogin } from "@/types/user";

export const login = async (data: UserLogin) => {
    try {
        const response = await api.post("/auth/login", data, {
            withCredentials: true,
        });
        console.log(response.data);
        if (response.status === 200 && response.data.user) {
            return response.data;
        }
    } catch {}
    return null;
};
