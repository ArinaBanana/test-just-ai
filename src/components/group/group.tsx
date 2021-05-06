import React, {ChangeEvent, PureComponent, SyntheticEvent} from "react";
import {User} from "../../types/user";
import {ListUser} from "../listUser/listUser";

interface GroupProps {
    groupName: string;
    users: Array<User>;
}

interface GroupState {
    showUsers: boolean;
}

export class Group extends PureComponent<GroupProps, GroupState> {
    constructor(props: GroupProps) {
        super(props);

        this.state = {
            showUsers: false
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    private handleButtonClick(evt: SyntheticEvent<HTMLButtonElement>) {
        this.setState(({showUsers}) => ({showUsers: !showUsers}));
    }

    render() {
        const {groupName, users} = this.props;
        const {showUsers} = this.state;

        const buttonText = showUsers ? "Скрыть" : "Показать";

        return (
            <div className="group">
                <div className="group__name">{groupName}</div>
                <button type="button" onClick={this.handleButtonClick}>{buttonText}</button>
                {
                    showUsers && <ListUser users={users} />
                }
            </div>
        );
    }
}
