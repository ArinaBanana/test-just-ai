import React, {ChangeEvent, PureComponent} from "react";

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
}

export class Search extends PureComponent<SearchProps> {
    constructor(props: SearchProps) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    private handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
        const {target: {value}} = evt;
        const {onChange} = this.props;

        onChange(value);
    }

    render() {
        const {value} = this.props;

        return (
            <label className="list-group__search search" htmlFor="search">
                Поиск
                <input
                    value={value}
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={this.handleInputChange}
                />
            </label>
        );
    }
}
