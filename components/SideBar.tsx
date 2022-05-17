import faker from "@faker-js/faker"
import Image from "next/image"

const SideBar = () => {
    return (
        <div className="text-white flex items-center justify-between">
            <div className="userIcon m-2">
                <Image
                    src={faker.image.avatar()}
                    alt="UserIcon"
                    layout="fill"
                    className="rounded-full"
                />
            </div>
            <div className="flex-1 mx-2">
                <h1 className="font-bold">Guest User</h1>
                <h2 className="text-gray-300">this is an insta clone</h2>
            </div>
            <button className="p-4 font-bold text-blue-300
            hover:text-white hover:scale-110
            ">LogOut</button>
        </div>
    )
}
export default SideBar
