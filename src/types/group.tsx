import {User} from "./user";

export interface Group {
    name: string;
    users: Array<User>;
}
