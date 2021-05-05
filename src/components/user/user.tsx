import React, {PureComponent} from "react";
import {User as UserProps} from "../../types/user";
import {leadingZero} from "../../utils/leadingZero";

export class User extends PureComponent<UserProps> {
    parseDate(date: Date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${leadingZero(day, 2)}.${leadingZero(month, 2)}.${year}`;
    }

    render() {
        const {name, picture, registered, email} = this.props;
        const parsed = this.parseDate(registered.date);

        return(
            <section className="user">
                <img className="user__images" src={picture.medium} alt="User Avatar" />
                <p className="user__name">
                    {name.title} {name.first} {name.last}, дата регистрации: {parsed}
                </p>
                <p className="user__email">{email}</p>
            </section>
        );
    }
}
