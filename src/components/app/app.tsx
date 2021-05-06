import React, {PureComponent} from "react";
import {ListGroup} from "../listGroup/listGroup";
import {Favorites} from "../favorites/favorites";
import {User} from "../../types/user";
import {Search} from "../search/search";

interface AppProps {
    users: Array<User>;
}

interface AppState {
    favoriteUsers: Array<User>;
    searchValue: string;
}

export class App extends PureComponent<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            favoriteUsers: [],
            searchValue: ""
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    private handleSearchChange(value: string) {
        this.setState({
           searchValue: value
        });
    }

    private getFoundUsers() {
        const {users} = this.props;
        const {searchValue} = this.state;

        if (searchValue.length === 0) {
            return users;
        }

        return users.filter((user) => {
            const {name: {title, first, last}} = user;
            const joined = `${title} ${first} ${last}`;

            return joined.includes(searchValue);
        });
    }

    render() {
        const users = this.getFoundUsers();
        const {favoriteUsers, searchValue} = this.state;

        return (
            <section className="app">
                <h1 className="app__title">Список пользователей</h1>
                <Search value={searchValue} onChange={this.handleSearchChange} />
                <ListGroup users={users} />
                <Favorites favoriteUsers={favoriteUsers} />
            </section>
        )
    }
}
