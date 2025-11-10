import Link from "next/link";

export const FooterComponent = () => {
    return (
        <div className="border-t w-full flex items-center justify-center h-16 shadow-sm">
            <div className="text-xs sm:text-base">
                Criado por{" "}
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/mattos-matheus/"
                    className="underline"
                >
                    Matheus Mattos.
                </Link>{" "}
                Código disponível no{" "}
                <Link
                    target="_blank"
                    href="https://github.com/matheuskdr/miniblog-frontend"
                    className="underline"
                >
                    GitHub
                </Link>
            </div>
        </div>
    );
};
