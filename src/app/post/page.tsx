import { MenuNav } from "@/components/header/menuNav";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full max-w-7xl min-h-[calc(100vh-228px)] flex flex-col items-center px-5">
            <div className="my-10">
                <MenuNav />
            </div>
            <h1 className="sm:text-3xl lg:text-4xl font-extrabold mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                voluptatibus dolorem inventore quae quibusdam corrupti debitis
                fugiat sed! ?
            </h1>
            <div className="relative w-full h-96">
                <Image
                    src="https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg?auto=format&q=90&crop=faces&fit=crop"
                    alt=""
                    fill
                    className="object-cover rounded-xl"
                />
            </div>
            <h2 className="my-10 text-base sm:text-xl lg:text-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                laudantium sint numquam possimus reiciendis optio. Ratione
                distinctio, amet magni alias explicabo excepturi aut maiores ad
                voluptatum obcaecati magnam architecto corporis! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Laudantium,
                nesciunt repudiandae accusantium nulla, dolores odit quos,
                provident dolorum placeat perferendis facilis maiores laborum
                sint amet tempora corporis quisquam architecto quidem. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quasi quia
                quod modi debitis libero est doloremque. Necessitatibus
                obcaecati illo adipisci maxime, blanditiis, officia minus
                temporibus excepturi perspiciatis amet, quis recusandae. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Facilis
                cupiditate id tempora animi ipsa iste? Accusamus voluptatibus
                omnis dolorem dicta exercitationem ullam odio unde,
                reprehenderit labore fuga. Blanditiis, neque expedita!
            </h2>
        </div>
    );
}
