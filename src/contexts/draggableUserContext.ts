import React from "react";
import {User} from "../types/user";

interface IDraggableUserContext {
    draggableUser: User | null;
    setDraggableUser: (user: User) => void;
}

export const DraggableUserContext = React.createContext<IDraggableUserContext>({
    draggableUser: null,
    setDraggableUser: () => {}
});
