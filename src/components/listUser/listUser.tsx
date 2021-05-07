import React, {PureComponent} from "react";
import {User as IUser} from "../../types/user";
import {User} from "../user/user";
import {Button} from "@material-ui/core";
import {List} from "@material-ui/core";
import "./style/listUser.css";

interface ListUserProps {
    users: Array<IUser>;
}

interface ListUserState {
    count: number;
}

const SHOW_USERS_COUNT = 10;

export class ListUser extends PureComponent<ListUserProps, ListUserState> {
    constructor(props: ListUserProps) {
        super(props);

        this.state = {
            count: SHOW_USERS_COUNT
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    private getShowedUsers() {
        const {users} = this.props;
        const {count} = this.state;

        return users.slice(0, count);
    }

    private handleButtonClick() {
        this.setState((prevState) => {
            const {count: prevCount} = prevState;

            return {
                count: prevCount + SHOW_USERS_COUNT
            }
        })
    }

    render() {
        const {users} = this.props;
        const {count} = this.state;

        const showedUsers = this.getShowedUsers();
        const showedCount = users.length - count;

        return (
            <List classes={{root: "group__list-user list-user"}}>
                {
                    showedUsers.map((user, index) => (
                        <User
                            key={`${user.id}`}
                            {...user}
                        />
                    ))
                }

                {
                    showedCount > 0
                    &&
                    <Button type="button" onClick={this.handleButtonClick}>
                        Еще {showedCount < SHOW_USERS_COUNT ? showedCount : SHOW_USERS_COUNT} пользователей
                    </Button>
                }
            </List>
        );
    }
}
