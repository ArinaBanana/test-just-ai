import React from "react";
import ReactDom from "react-dom";
import {App} from "./components/app/app";
import {getUsers} from "./api";
import {User} from "./types/user";
import {getSortedUsers} from "./utils/getSortedUsers";

getUsers()
    .then(
        users => {
            users.forEach((user: User, index) => {
                const {registered} = user;
                const {date: iso} = registered;

                user.registered.date = new Date(iso);
                user.id = index;
            });

            const sortedUsers = getSortedUsers(users);

            ReactDom.render(
                <App users={sortedUsers} />,
                document.getElementById('root')
            );
        }
    )
    .catch(e => console.log(e));
