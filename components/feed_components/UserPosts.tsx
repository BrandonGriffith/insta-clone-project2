import faker from "@faker-js/faker"
import UserPost from "./UserPost"

let ranId: any = faker.random.numeric();

let posts = [{
    id: ranId * 55,
    username: faker.name.firstName(),
    userImg: faker.image.avatar(),
    img: faker.image.imageUrl(),
    message: faker.random.words()
}, {
    id: ranId * 66,
    username: faker.name.firstName(),
    userImg: faker.image.avatar(),
    img: faker.image.imageUrl(),
    message: faker.random.words()
},
]
const UserPosts = () => {
    return (
        <div className="text-white max-w-4xl m-auto">
            {posts.map((post) => (
                <UserPost key={post.id}
                    id={post.id} username={post.username}
                    userImg={post.userImg} img={post.img}
                    message={post.message}
                />
            ))}
        </div>
    )
}
export default UserPosts
