import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export function useAuthCheck() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null
    );

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await api.get("/me", {
                    withCredentials: true,
                });
                if (res.data.user) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch {
                setIsAuthenticated(false);
            }
        }

        checkAuth();
    }, []);

    return isAuthenticated;
}
