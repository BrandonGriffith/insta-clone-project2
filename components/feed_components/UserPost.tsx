import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"
import Image from "next/image"


const UserPost = (props: any) => {
    return (
        <div className="my-7 bg-slate-900 border-2 border-gray-600 rounded-xl">
            <div className="flex p-2 items-center">
                <div className="userIcon m-2">
                    <Image
                        src={props.userImg ? props.userImg : "/favicon.ico"}
                        alt="userImg"
                        layout="fill"
                        className="rounded-full"
                    />
                </div>
                <p className="font-bold flex-1 cursor-pointer">{props.username ? props.username : "loading"}</p>
                <DotsHorizontalIcon className="h-5 cursor-pointer" />
            </div>
            <div className="relative h-96 bg-black">
                <Image
                    src={props.img}
                    alt="img"
                    layout="fill"
                    className="object-contain"
                />
            </div>
            <div className="flex justify-between p-2">
                <div className="flex space-x-5">
                    <HeartIcon className="userPostBtn" />
                    <ChatIcon className="userPostBtn" />
                    <PaperAirplaneIcon className="userPostBtn" />
                </div>
                <BookmarkIcon className="userPostBtn" />
            </div>
            <p className="p-4 truncate">
                <span className="font-bold pr-2">{props.username}: </span>
                {props.message}
            </p>
            <form className="flex p-2 items-center">
                <EmojiHappyIcon className="userPostBtn m-2" />
                <input type="text" className="flex-1 border-none
                rounded-xl outline-none focus:ring-0 bg-slate-800
                "placeholder="Add a message here..." />
                <button className="font-bold bg-blue-800 p-2 rounded-xl
                hover:scale-125 ease-in-out duration-100
                ">Post</button>
            </form>
        </div>
    )
}
export default UserPost
