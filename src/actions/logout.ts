import { api } from "@/lib/axios";

export const logout = async () => {
    try {
        const response = await api.post("/logout");
        console.log(response.data);
        if (response) {
            return response.data;
        }
    } catch {}
    return null;
};
