import Image from "next/image";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const MainContent = () => {
    return (
        <div className="w-full h-[200px] sm:h-[300px] lg:h-[400px] mb-20 flex flex-col items-center ">
            <div className="relative w-full h-96">
                <Image
                    src="https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg?auto=format&q=90&crop=faces&fit=crop"
                    alt=""
                    fill
                    className="object-cover rounded-xl"
                    priority
                />
            </div>
            <div className="min-w-[170px] sm:w-[300px] lg:w-full lg:max-w-[400px] absolute mt-30 sm:mt-50 lg:mt-70 sm:-ml-60 lg:-ml-[500px]">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xs sm:text-lg lg:text-2xl">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </CardTitle>
                        <CardDescription>
                            <span className="text-xs sm:text-base lg:text-xl">
                                Matheus{" "}
                            </span>
                            <span className="text-xs sm:text-base lg:text-xl">
                                11/03/1999
                            </span>
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
};
