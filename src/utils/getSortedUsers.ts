import {User as IUser} from "../types/user";

export function getSortedUsers(users: Array<IUser>) {
    const copiedUsers = [...users];

    copiedUsers.sort((a, b) => {
        const dateA = a.registered.date.getTime();
        const dateB = b.registered.date.getTime();

        return dateB - dateA;
    });

    return copiedUsers;
}
