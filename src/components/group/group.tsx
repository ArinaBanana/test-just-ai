import React, {PureComponent, SyntheticEvent} from "react";
import {User} from "../../types/user";
import {ListUser} from "../listUser/listUser";
import {SearchContext} from "../../contexts/searchContext";

interface GroupProps {
    groupName: string;
    users: Array<User>;
}

interface GroupState {
    showUsers: boolean;
}

export class Group extends PureComponent<GroupProps, GroupState> {
    constructor(props: GroupProps) {
        super(props);

        this.state = {
            showUsers: false
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    static contextType = SearchContext;

    componentDidMount() {
        const searchValue = this.context;

        if (searchValue.length !== 0) {
            this.setState({showUsers: true})
        }
    }

    public componentDidUpdate(
        prevProps: Readonly<GroupProps>,
        prevState: Readonly<GroupState>,
    ) {
        const {showUsers} = this.state;
        const {showUsers: prevShowUsers} = prevState;

        const searchValue = this.context;

        if (
            !showUsers
            && searchValue.length !== 0
            && showUsers === prevShowUsers
        ) {
            this.setState({showUsers: true});
        }
    }

    private handleButtonClick(evt: SyntheticEvent<HTMLButtonElement>) {
        this.setState(({showUsers}) => ({showUsers: !showUsers}));
    }

    render() {
        const {groupName, users} = this.props;
        const {showUsers} = this.state;

        const buttonText = showUsers ? "Скрыть" : "Показать";

        return (
            <div className="list-group__group group">
                <div className="group__name">{groupName}</div>
                <button className="group__button" type="button" onClick={this.handleButtonClick}>{buttonText}</button>
                {
                    showUsers && <ListUser users={users} />
                }
            </div>
        );
    }
}
