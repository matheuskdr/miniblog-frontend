import Image from "next/image";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
type Props = {
    content: string;
};
export const PostCard = (content: Props) => {
    return (
        <div>
            <Card className="max-w-[450px]">
                <CardHeader>
                    <CardTitle>A Torre Eiffel encolhe no inverno!</CardTitle>
                    <CardDescription className="flex gap-3">
                        <div>Matheus</div>
                        <div>11/03/1999</div>
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-3">
                    <div>{content.content}</div>
                    <Image
                        src="https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg?auto=format&q=90&crop=faces&fit=crop"
                        alt=""
                        width={300}
                        height={100}
                    />
                </CardContent>
                <CardFooter>
                    <Button className="cursor-pointer">Leia mais...</Button>
                </CardFooter>
            </Card>
        </div>
    );
};
