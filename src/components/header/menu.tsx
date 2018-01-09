import * as React from "react";

export class MyMenu extends React.Component<any, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        var items = ['items 1', 'Item2', 'Item 3'];
        return(
            <ul>
                {items.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
            </ul>
        )
    }
}