import { NavContent } from "@/components/content/navContent";
import { MainContent } from "@/components/content/mainContent";

export default function Home() {
    return (
        <div className="w-full max-w-7xl min-h-screen flex flex-col items-center gap-10 px-10 py-10 pb-10">
            <MainContent />
            <NavContent />
        </div>
    );
}
