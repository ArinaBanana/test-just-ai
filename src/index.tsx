import React from "react";
import ReactDom from "react-dom";
import {App} from "./components/app/app";
import {getUsers} from "./api";

getUsers()
    .then(
        users => {
            ReactDom.render(
                <App users={users} />,
                document.getElementById('root')
            );
        }
    )
    .catch(e => console.log(e));
