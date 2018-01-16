import * as React from "react";
import { MyLogo } from "./logo";
import { MyMenu } from "./menu";
import { Register } from "./register"

export class Header extends React.Component<any, {}> {
    render() {
        return(
            <div className="u-flex b-menu">
                <MyLogo />
                <div className="u-flex b-menu-item">
                    <MyMenu />
                    <Register />
                </div>
            </div>
        )
    }
}