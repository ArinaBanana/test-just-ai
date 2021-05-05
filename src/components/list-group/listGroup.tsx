import React, {PureComponent} from "react";
import {User as IUser} from "../../types/user";
import {Group as IGroup} from "../../types/group";
import {Group} from "../group/group";
import {Search} from "../search/search";

interface SearchProps {
    users: Array<IUser>;
}

export class ListGroup extends PureComponent<SearchProps> {
    filterUsers(
        users: Array<IUser>,
        min: number,
        max: number
    ) {
       return users.filter((user) => {
            const { registered } = user;
            const { date } = registered;

            const day = date.getDate();

            if (day >=min && day <=max) {
                return true;
            }
        });
    }

    sortUsers(users: Array<IUser>) {
        return users.sort((a, b) => {
            const dateA = a.registered.date.getTime();
            const dateB = b.registered.date.getTime();

            return dateA - dateB;
        });
    }

    createGroup(
        users: Array<IUser>,
        min: number,
        max: number
    ) {
        const filtered = this.filterUsers(users, min, max);
        const sorted = this.sortUsers(filtered);

        return {
            name: `${min}-${max}`,
            users: sorted
        }
    }

    createGroups() {
        const {users} = this.props;

        const ranges = [[1, 10], [11, 20], [21, 31]];
        let groups: Array<IGroup> = [];

        ranges.forEach((range) => {
            const min = range[0];
            const max = range[1];

            const group: IGroup = this.createGroup(users, min, max);

            groups.push(group);
        })

        return groups;
    }

    render() {
        const groups = this.createGroups();

        return (
            <div className="app__list-group list-group">
                <Search />

                {
                    groups.map(
                        (group) => <Group groupName={group.name} users={group.users} />
                    )
                }

            </div>
        );
    }
}
