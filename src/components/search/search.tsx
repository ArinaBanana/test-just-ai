import React, {ChangeEvent, FormEvent, PureComponent} from "react";

interface SearchProps {
    onChange: (value: string) => void;
}

interface SearchState {
    value: string;
}

export class Search extends PureComponent<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);

        this.state = {
            value: ""
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    private handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();

        const {onChange} = this.props;
        const {value} = this.state;

        onChange(value);
    }

    private handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
        const {target: {value}} = evt;

        this.setState({
            value
        });
    }

    render() {
        const {value} = this.state;

        return (
            <form className="app__form-search form-search" action="#" onSubmit={this.handleFormSubmit}>
                <label className="form-search__label" htmlFor="search">
                    Поиск
                    <input
                        value={value}
                        className="form-search__input"
                        type="text"
                        id="search"
                        onChange={this.handleInputChange}
                    />
                </label>

                <button className="form-search__button" type="submit">Искать</button>
            </form>
        );
    }
}
