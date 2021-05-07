import React, {PureComponent} from "react";
import {ListGroup} from "../listGroup/listGroup";
import {Favorites} from "../favorites/favorites";
import {User} from "../../types/user";
import {Search} from "../search/search";
import {SearchContext} from "../../contexts/searchContext";
import {Container} from "@material-ui/core";
import "./style/app.css";

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
            const joined = `${title} ${first} ${last}`.toLowerCase();

            return joined.includes(searchValue.toLowerCase());
        });
    }

    render() {
        const users = this.getFoundUsers();
        const {favoriteUsers, searchValue} = this.state;

        return (
            <SearchContext.Provider value={searchValue}>
                <section className="app">
                    <h1 className="app__title">Список пользователей</h1>

                    <div className="app__wrapper">

                        <div className="app__container-search">
                            <Search onChange={this.handleSearchChange} />
                            <ListGroup users={users} />
                        </div>

                        <div className="app__container-favorites">
                            <Favorites favoriteUsers={favoriteUsers} />
                        </div>

                    </div>
                </section>
            </SearchContext.Provider>
        )
    }
}
