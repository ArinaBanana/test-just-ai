import React, {PureComponent, DragEvent} from "react";
import {User} from "../../types/user";
import {ListUser} from "../listUser/listUser";
import {DraggableUserContext} from "../../contexts/draggableUserContext";
import "./style/favorites.css";

interface FavoritesProps {
    userToAdd: User | null;
}

interface FavoritesState {
    favoriteUsers: Array<User>;
}

export class Favorites extends PureComponent<FavoritesProps, FavoritesState> {
    constructor(props: FavoritesProps) {
        super(props);

        this.state = {
            favoriteUsers: []
        }

        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragDrop = this.handleDragDrop.bind(this);

    }

    static contextType = DraggableUserContext;

    private handleDragEnter(evt: DragEvent) {
        evt.preventDefault();
    }

    private handleDragLeave(evt: DragEvent) {
        evt.preventDefault();
    }

    private handleDragOver(evt: DragEvent) {
        evt.preventDefault();
    }

    private handleDragDrop(evt: DragEvent) {
        const {userToAdd} = this.props;
        this.setState((prevState) => {
            const {favoriteUsers} = prevState;

            if (userToAdd) {
                return {
                    favoriteUsers: [...favoriteUsers, userToAdd]
                }
            }
        });
    }

    render() {
        const {favoriteUsers} = this.state;
        const {draggableUser} = this.context;
        const draggableModeClassName = "favorites__list-user_draggable";
        const isDraggable = Boolean(draggableUser);

        return (
            <div className="app__favorites favorites">
                <p className="favorites__title">Избранные</p>

                <ListUser
                    className={`favorites__list-user ${isDraggable ? draggableModeClassName : ""}`}
                    users={favoriteUsers}
                    onDragEnter={this.handleDragEnter}
                    onDragLeave={this.handleDragLeave}
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDragDrop}
                >
                </ListUser>
            </div>
        );
    }
}
