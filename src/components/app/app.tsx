import React, {PureComponent} from "react";
import {ListGroup} from "../listGroup/listGroup";
import {Favorites} from "../favorites/favorites";
import {User} from "../../types/user";

interface AppProps {
    users: Array<User>
}

interface AppState {
    initialFavoriteUsers: []
}

export class App extends PureComponent<AppProps, AppState> {

    render() {
        const {users} = this.props;

        return (
            <section className="app">
                <h1 className="app__title">Список пользователей</h1>

                <ListGroup users={users} />
                <Favorites favoriteUsers={[]} />
            </section>
        )
    }
}
