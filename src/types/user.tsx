interface UserName {
    first: string;
    last: string;
    title: string;
}

interface UserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface UserRegistered {
    age: number;
    date: Date;
}

export interface User {
    id: number;
    name: UserName;
    picture: UserPicture;
    registered: UserRegistered;
    email: string;
}
