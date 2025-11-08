import Image from "next/image";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const MainContent = () => {
    return (
        <div className="w-full mb-20">
            <div className="relative w-full h-96">
                <Image
                    src="https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg?auto=format&q=90&crop=faces&fit=crop"
                    alt=""
                    fill
                    className="object-cover rounded-md"
                    priority
                />
            </div>
            <div className="min-w-xl ml-12 -mt-32 absolute">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </CardTitle>
                        <CardDescription>
                            <span>Matheus </span>
                            <span>11/03/1999</span>
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
};
