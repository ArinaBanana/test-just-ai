import React, {PureComponent} from "react";
import {ListGroup} from "../listGroup/listGroup";
import {Favorites} from "../favorites/favorites";
import {User} from "../../types/user";
import {Search} from "../search/search";
import {SearchContext} from "../../contexts/searchContext";
import {DraggableUserContext} from "../../contexts/draggableUserContext";
import "./style/app.css";
import {getUsers} from "../../api";
import {CircularProgress} from "@material-ui/core";

interface AppState {
    searchValue: string;
    draggableUser: User | null;
    users: Array<User>;
    isLoading: boolean;
}

export class App extends PureComponent<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            searchValue: "",
            draggableUser: null,
            users: [],
            isLoading: true
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.setDraggableUser = this.setDraggableUser.bind(this);
    }

    componentDidMount() {
        getUsers()
            .then(users => this.setState({
                users,
                isLoading: false
            }))
            .catch(err => console.log(err));
    }

    private handleSearchChange(value: string) {
        this.setState({
           searchValue: value
        });
    }

    private getFoundUsers() {
        const {searchValue, users} = this.state;

        if (searchValue.length === 0) {
            return users;
        }

        return users.filter((user) => {
            const {name: {title, first, last}} = user;
            const joined = `${title} ${first} ${last}`.toLowerCase();

            return joined.includes(searchValue.toLowerCase());
        });
    }

    private setDraggableUser(draggableUser: User | null) {
        this.setState({
            draggableUser
        })
    }

    render() {
        const users = this.getFoundUsers();
        const {searchValue, draggableUser, isLoading} = this.state;

        const draggableContextValue = {
            draggableUser,
            setDraggableUser: this.setDraggableUser
        }

        return (
            <DraggableUserContext.Provider value={draggableContextValue}>
                <SearchContext.Provider value={searchValue}>

                    {
                        isLoading ? <div className="app__spinner"><CircularProgress /></div> : <section className="app">
                            <h1 className="app__title">???????????? ??????????????????????????</h1>

                            <div className="app__wrapper">

                                <div className="app__container-search">
                                    <Search onChange={this.handleSearchChange} />
                                    {
                                        users.length === 0
                                            ? <span className="app__search-warning">?????? ????????????????????</span>
                                            : <ListGroup users={users} />
                                    }
                                </div>

                                <div className="app__container-favorites">
                                    <Favorites userToAdd={draggableUser} />
                                </div>

                            </div>
                        </section>
                    }

                </SearchContext.Provider>
            </DraggableUserContext.Provider>
        )
    }
}
