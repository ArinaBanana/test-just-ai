import React, {PureComponent} from "react";
import {User} from "../../types/user";
import {ListUser} from "../listUser/listUser";

interface GroupProps {
    groupName: string;
    users: Array<User>;
}

export class Group extends PureComponent<GroupProps> {
    render() {
        const {groupName, users} = this.props;

        return (
            <div className="group">
                <div className="group__name">{groupName}</div>

                <ListUser users={users} />
            </div>
        );
    }
}
