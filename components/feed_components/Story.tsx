import Image from "next/image"
import { UserProfile } from "../Types"

const Story = (props: UserProfile) => {
    return (
        <div className="text-white">
            <div className="userIcon">
                <Image
                    src={props.avatar}
                    alt={props.avatar}
                    layout="fill"
                    priority
                />
            </div>
            <p className="text-xs w-14 text-center truncate">{props.username}</p>
        </div>
    )
}
export default Story
