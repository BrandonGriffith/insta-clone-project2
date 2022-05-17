import faker from "@faker-js/faker";
import Image from "next/image";
import { useEffect, useState } from "react"
import { UserProfile } from "./Types";

const UserRecommended = () => {
    const [recom, setRecom] = useState<any>([]);
    useEffect(() => {
        const recom = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ));
        setRecom(recom);
    }, [])
    return (
        <div className="mt-8 text-blue-200 font-bold">
            <div className="flex justify-between">
                <h2>
                    Recommended Users
                </h2>
                <button className="text-blue-300
                hover:text-white hover:scale-110">
                    See More
                </button>
            </div>
            {
                recom.map((profile: UserProfile) => (
                    <div key={profile.id} className="flex justify-between mt-2 item-center">
                        <div className="userIcon">
                            <Image
                                src={profile.avatar}
                                alt={profile.avatar}
                                layout="fill"
                                priority
                            />
                        </div>
                        <div className="flex-1 m-2 text-white">
                            <h2 className="text-md font-bold">
                                {profile.username}
                            </h2>
                            <h3 className="text-xs text-slate-400">
                                {profile.company.name}
                            </h3>
                        </div>
                        <button className="text-md font-semibold">Follow</button>
                    </div>
                ))
            }
        </div>
    )
}
export default UserRecommended
