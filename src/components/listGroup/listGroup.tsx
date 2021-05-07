import React, {PureComponent} from "react";
import {User as IUser} from "../../types/user";
import {Group as IGroup} from "../../types/group";
import {Group} from "../group/group";
import {getGroupName} from "../../utils/getGroupName";
import "./style/listGroup.css"

interface ListGroupProps {
    users: Array<IUser>;
}

export class ListGroup extends PureComponent<ListGroupProps> {
    private createGroups(): Array<IGroup> {
        const {users} = this.props;

        if (users.length === 0) {
            return [];
        }

        const lastUser = users[users.length - 1];
        const {registered: {age}} = lastUser;

        const groupsCount = Math.ceil(age / 10);

        const groups: Array<IGroup> = new Array(groupsCount).fill(null).map(() => []);

        return users.reduce((groups, user) => {
            const {registered: {age}} = user;
            const indexGroupByAge = Math.floor((age - 1) / 10);

            groups[indexGroupByAge].push(user);

            return groups;
        }, groups);
    }

    render() {
        const groups = this.createGroups();

        return (
            <div className="app__list-group list-group">
                {
                    groups.map(
                        (group, index) =>
                            <Group
                                key={index}
                                groupName={getGroupName(index)}
                                users={group}
                            />
                    )
                }
            </div>
        );
    }
}
