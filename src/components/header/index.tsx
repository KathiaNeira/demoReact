import * as React from "react";
import { MyLogo } from "./logo";
import { MyMenu } from "./menu";

const classMenu = {
    display: 'flex',    
}

export class Header extends React.Component<any, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={classMenu}>
                <MyLogo />
                <MyMenu />
            </div>
        )
    }
}