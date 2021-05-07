import React, {ChangeEvent, FormEvent, PureComponent} from "react";
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";
import "./style/form-search.css";

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
                <TextField
                    value={value}
                    type="text"
                    id="search"
                    onChange={this.handleInputChange}

                    classes={{root: "form-search__input"}}
                    variant="outlined"
                    label="Поиск"
                    size="small"
                />

                <Button type="submit" variant="contained">Искать</Button>
            </form>
        );
    }
}
