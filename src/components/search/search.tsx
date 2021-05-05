import React, {PureComponent} from "react";

export class Search extends PureComponent {
    render() {
        return (
            <label className="list-group__search search" htmlFor="search">
                Поиск
                <input className="search__input" type="text" id="search"/>
            </label>
        );
    }
}
