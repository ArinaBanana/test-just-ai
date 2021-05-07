import React, {FC, PureComponent} from "react";
import {User as IUser, UserName} from "../../types/user";
import {parseDate} from "../../utils/formatUserDate";
import {SearchContext} from "../../contexts/searchContext";
import {DraggableUserContext} from "../../contexts/draggableUserContext";
import {ListItem} from "@material-ui/core";
import {ListItemAvatar} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import "./style/user.css";
import {getFullName} from "../../utils/getFullName";

interface UserNameProps {
    name: UserName;
    searchValue: string;
    parsedDate: string;
}

const UserName: FC<UserNameProps> = (props) => {
    const {name, searchValue, parsedDate} = props;
    const {before, found, after} = getFullName(name, searchValue);

    return (
        <p className="user__name">
            {before}<span style={{fontWeight: "bold"}}>{found}</span>{after}, дата регистрации: {parsedDate}
        </p>
    );
}

interface UserProps {
    user: IUser;
}

export class User extends PureComponent<UserProps> {
    constructor(props: UserProps) {
        super(props);

        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
    }

    static contextType = DraggableUserContext;

    private handleDragStart() {
        const {setDraggableUser} = this.context;
        const {user} = this.props;

        setDraggableUser(user);
    }

    private handleDragEnd() {
        const {setDraggableUser} = this.context;

        setDraggableUser(null);
    }

    render() {
        const {name, picture, registered, email} = this.props.user;
        const parsed = parseDate(registered.date);

        return(
            <SearchContext.Consumer>
                {searchValue => (
                    <ListItem
                        classes={{root: "list-user__wrapper"}}
                        draggable="true"
                        onDragStart={this.handleDragStart}
                        onDragEnd={this.handleDragEnd}
                    >
                        <section className="list-user__user user">
                            <ListItemAvatar>
                                <Avatar src={picture.medium} alt="User Avatar" />
                            </ListItemAvatar>

                            <ListItemText>
                                <UserName name={name} searchValue={searchValue} parsedDate={parsed} />
                                <p className="user__email">{email}</p>
                            </ListItemText>
                        </section>
                    </ListItem>
                )}

            </SearchContext.Consumer>
        );
    }
}
