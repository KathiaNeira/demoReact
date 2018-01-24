import * as React from "react";
import { MyLogo } from "./logo";
import { MyMenu } from "./menu";
import { Register } from "./register"
import { Login } from "./login";

import { Modal } from "../modal/modal";

export class Header extends React.Component<any, {}> {
    render() {
        return(
            <div className="u-flex b-menu">
                <MyLogo />
                <MyMenu />
                <div className="u-flex">
                    <Register />
                    <Login />
                </div>
            </div>
        )
    }
}