import Link from "next/link";

export const Logo = () => {
    return (
        <Link className="" href="/">
            <div className="flex items-center justify-center">
                <span className="font-bold sm:text-5xl">&</span>
                <div className="flex flex-col">
                    <div className="font-bold sm:text-xl md:text-2xl lg:text-3xl">
                        Insights
                    </div>
                    <div className="font-bold sm:text-xl md:text-2xl lg:text-3xl">
                        Curiosidades
                    </div>
                </div>
            </div>
        </Link>
    );
};
