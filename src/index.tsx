import React from "react";
import ReactDom from "react-dom";
import {App} from "./components/app/app";
import {getUsers} from "./api";
import {User} from "./types/user";

getUsers()
    .then(
        users => {
            users.forEach((user: User) => {
                const {registered} = user;
                const {date: iso} = registered;

                user.registered.date = new Date(iso);
            });

            ReactDom.render(
                <App users={users} />,
                document.getElementById('root')
            );
        }
    )
    .catch(e => console.log(e));
