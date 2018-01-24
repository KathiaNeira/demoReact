import * as React from "react";

interface MyPropsMenu {
    options?: any; 
}

interface myState {
    items: string[];
}

export class MyMenu extends React.Component<MyPropsMenu, myState> {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']
        }
    }

    render() {        
        return(
            <MyOptionsMenu options = {this.state.items} />
        )
    }
}

class MyOptionsMenu extends React.Component<MyPropsMenu, myState> {
    constructor(props) {
        super(props)
    }

    render() {
        let options = this.props.options
        return(
            <div>
                <ul className="u-flex">
                    {options.map((option, index) => <li key={index}>{option}</li>)}
                </ul>
            </div>
        )
    }
}