import React, {PureComponent} from "react";
import {User as IUser} from "../../types/user";
import {Group as IGroup} from "../../types/group";
import {Group} from "../group/group";
import {Search} from "../search/search";
import {getSortedUsers} from "../../utils/getSortedUsers";
import {getGroupName} from "../../utils/getGroupName";

interface SearchProps {
    users: Array<IUser>;
}

export class ListGroup extends PureComponent<SearchProps> {
    private createGroups(): Array<IGroup> {
        const {users} = this.props;

        const sortedUsers = getSortedUsers(users);

        const lastUser = sortedUsers[sortedUsers.length - 1];
        const {registered: {age}} = lastUser;

        const groupsCount = Math.ceil(age / 10);

        const groups: Array<IGroup> = new Array(groupsCount).fill(null).map(() => []);

        return sortedUsers.reduce((groups, user) => {
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
                <Search />

                {
                    groups.map(
                        (group, index) =>
                            <Group key={index} groupName={getGroupName(index)} users={group} />
                    )
                }

            </div>
        );
    }
}
