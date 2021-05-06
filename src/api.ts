import {User} from "./types/user";

const PATH_DATA = "https://randomuser.me/api/?results=5000&inc=name,email,registered,picture";

async function getUsers(): Promise<Array<User>> {
    const response = await fetch(PATH_DATA);

    if (response.status !== 200) {
        throw new Error('Oops, try again later');
    }

    const {results} = await response.json();
    return results;
}

export {getUsers};
