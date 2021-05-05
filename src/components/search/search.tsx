import React, {PureComponent} from "react";
import {User} from "../../types/user";
import {Group} from "../group/group";

interface SearchProps {
    users: Array<User>;
}

export class Search extends PureComponent<SearchProps> {
    render() {
        const {users} = this.props;

        return (
            <div className="app__search search">
                <label className="search__label" htmlFor="search">
                    Поиск
                    <input className="search_input" type="text" id="search"/>
                </label>

                <Group groupName="1-10" users={users} />
            </div>
        );
    }
}
