import StoryFeed from "./feed_components/StoryFeed"
import UserPosts from "./feed_components/UserPosts"
import SideBar from "./SideBar"
import UserRecommended from "./UserRecommended"

const UserFeed = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:grow
        xl:grid-cols-3 xl:max-w-7xl mx-auto pt-1
        ">
            <div className="col-span-2">
                <StoryFeed />
                <UserPosts />
            </div>
            <div className="hidden xl:grid">
                <div className="pl-8 fixed top-20">
                    <SideBar />
                    <UserRecommended />
                </div>
            </div>
        </div>
    )
}
export default UserFeed
