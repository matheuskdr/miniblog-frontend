import { LoginForm } from "@/components/loginForm";

export default async function Home() {
    return (
        <div className="w-full max-w-7xl min-h-[calc(100vh-228px)] flex justify-center items-center ">
            <LoginForm />
        </div>
    );
}
