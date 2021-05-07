import {User} from "./types/user";
import {getSortedUsers} from "./utils/getSortedUsers";

const PATH_DATA = "https://randomuser.me/api/?results=5000&inc=name,email,registered,picture";

async function getUsers(): Promise<Array<User>> {
    const response = await fetch(PATH_DATA);

    if (response.status !== 200) {
        throw new Error('Oops, try again later');
    }

    const {results: users} = await response.json();

    users.forEach((user: User, index: number) => {
        const {registered} = user;
        const {date: iso} = registered;

        user.registered.date = new Date(iso);
        user.id = index;
    });

    return getSortedUsers(users);
}

export {getUsers};
