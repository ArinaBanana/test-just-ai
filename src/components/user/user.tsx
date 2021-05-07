import React, {PureComponent} from "react";
import {User as UserProps, UserName} from "../../types/user";
import {parseDate} from "../../utils/formatUserDate";
import {SearchContext} from "../../contexts/searchContext";
import {ListItem} from "@material-ui/core";
import {ListItemAvatar} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import "./style/user.css";

export class User extends PureComponent<UserProps> {
    static contextType = SearchContext;

    private getFullName(name: UserName) {
        const searchValue = this.context;
        const joined = `${name.title} ${name.first} ${name.last}`;

        const leftIndex = joined.toLowerCase().indexOf(searchValue.toLowerCase());
        const rightIndex = leftIndex + searchValue.length;

        const before = joined.slice(0, leftIndex);
        const found = joined.slice(leftIndex, rightIndex);
        const after = joined.slice(rightIndex)

        return {
           before,
           found,
           after
        }
    }

    render() {
        const {name, picture, registered, email} = this.props;
        const parsed = parseDate(registered.date);

        const {before, found, after} = this.getFullName(name);

        return(
            <ListItem classes={{root: "list-user__wrapper"}}>
                <section className="list-user__user user">
                    <ListItemAvatar>
                        <Avatar src={picture.medium} alt="User Avatar" />
                    </ListItemAvatar>

                    <ListItemText>
                        <p className="user__name">
                            {before}<span style={{fontWeight: "bold"}}>{found}</span>{after}, дата регистрации: {parsed}
                        </p>
                        <p className="user__email">{email}</p>
                    </ListItemText>
                </section>
            </ListItem>
        );
    }
}
