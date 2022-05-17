import { useEffect, useState } from "react"
import faker from "@faker-js/faker"
import Story from "./Story";
import { UserProfile } from "../Types";


const StoryFeed = () => {
    const [fakeInfo, setFakeInfo] = useState<any>([]);
    useEffect(() => {
        const fakeInfo = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        console.log(fakeInfo);
        setFakeInfo(fakeInfo);
    }, []);

    return (
        <div className="flex space-x-2 p-5 border-2 border-gray-600 rounded-lg
        overflow-x-scroll scrollbar-thin scrollbar-thumb-black
        ">
            {fakeInfo.map((profile: UserProfile) =>
                <Story
                    key={profile.id}
                    avatar={profile.avatar}
                    username={profile.username}
                />
            )}
        </div>
    )
}
export default StoryFeed
