import Image from "next/image";
import faker from "@faker-js/faker"
import { HomeIcon } from "@heroicons/react/solid";
import {
    SearchIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline"


const Header = () => {
    return (
        <div className="z-40 shadow-md sticky top-0 backg">
            <div className="flex justify-between max-w-7xl lg:mx-auto 
            border-b-4 border-gray-800 pb-1 rounded-lg px-1">
                <div className="relative cursor-pointer hidden 
                md:flex w-96 h-12">
                    <Image
                        src="/insta.jpg"
                        alt=""
                        layout="fill"
                        className="bg-white rounded-full"
                        priority
                    />
                </div>
                <div className="relative cursor-pointer w-10 md:hidden flex-shrink-0">
                    <Image
                        src="/insta-icon.svg"
                        alt=""
                        layout="fill"
                        className="bg-white rounded-lg"
                        priority
                    />
                </div>
                <div className="max-w-sm">
                    <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 pl-2 items-center">
                            <SearchIcon className="h-5 w-5 text-white" />
                        </div>
                        <input type="text" placeholder="Search"
                            className="bg-slate-600 text-slate-100 
                        rounded-lg block pl-10 border-2 max-h-full w-80
                        border-black focus:border-black focus:ring-black"
                        />
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="relative md:hidden">
                        <MenuIcon className="w-10 text-white md:hidden pt-2 cursor-pointer" />
                        <p className="noteRed">3</p>
                    </div>
                    <HomeIcon className="navIcon" />
                    <UserGroupIcon className="navIcon" />
                    <div className="relative navIcon">
                        <PaperAirplaneIcon className="rotate-45 navIcon" />
                        <p className="noteRed">3</p>
                    </div>
                    <div className="relative w-10 h-10 rounded-full cursor-pointer
                    mt-1 border-2 border-blue-400
                    ">
                        <Image
                            src={faker.image.avatar()}
                            alt="UserIcon"
                            layout="fill"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
