import React, {PureComponent} from "react";
import {User} from "../../types/user";
import {ListUser} from "../listUser/listUser";

interface FavoritesProps {
    favoriteUsers: Array<User>;
}

export class Favorites extends PureComponent<FavoritesProps> {
    render() {
        const {favoriteUsers} = this.props;

        return (
            <div className="app__favorites favorites">
                <div className="favorites__title">Избранные</div>

                <ListUser users={favoriteUsers} />
            </div>
        );
    }
}
