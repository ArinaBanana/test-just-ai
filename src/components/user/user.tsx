import React, {PureComponent} from "react";
import {User as UserProps} from "../../types/user";
import {parseDate} from "../../utils/formatUserDate";

export class User extends PureComponent<UserProps> {

    }

    render() {
        const {name, picture, registered, email} = this.props;
        const parsed = parseDate(registered.date);

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
