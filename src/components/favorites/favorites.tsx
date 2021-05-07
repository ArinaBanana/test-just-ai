import React, {PureComponent} from "react";
import {User} from "../../types/user";
import {ListUser} from "../listUser/listUser";
import "./style/favorites.css";

interface FavoritesProps {
    favoriteUsers: Array<User>;
}

export class Favorites extends PureComponent<FavoritesProps> {
    render() {
        const {favoriteUsers} = this.props;

        return (
            <div className="app__favorites favorites">
                <p className="favorites__title">Избранные</p>

                <ListUser users={favoriteUsers} />
            </div>
        );
    }
}
