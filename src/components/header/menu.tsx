import * as React from "react";

const classMenu = {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '0'
}

const items = {
    margin: '0px 8px'
}

export class MyMenu extends React.Component<any, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        var items = ['items 1', 'Item2', 'Item 3'];
        return(
            <ul style={classMenu}>
                {items.map(function(name, index){
                    return <li style={items} key={ index }>{name}</li>;
                  })}
            </ul>
        )
    }
}