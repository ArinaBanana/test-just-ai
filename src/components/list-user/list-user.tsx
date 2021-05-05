import React, {PureComponent} from "react";
import {User as IUser} from "../../types/user";
import {User} from "../user/user";

interface ListUserProps {
    users: Array<IUser>;
}

export class ListUser extends PureComponent<ListUserProps> {
    render() {
        const {users} = this.props;

        return (
            <div className="list-user">
                {
                    users.map((user, index) => (
                       <User
                           key={user.id.value}
                           id={user.id}
                           name={user.name}
                           picture={user.picture}
                           registered={user.registered}
                           email={user.email}
                       />
                    ))
                }
            </div>
        );
    }
}
