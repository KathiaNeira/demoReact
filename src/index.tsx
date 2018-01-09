import * as React from "react";
import * as ReactDOM from "react-dom";

import { MyLogo } from "./components/header/logo";
import { MyMenu } from "./components/header/menu";

ReactDOM.render(
    <div>
        <MyLogo />
        <MyMenu />,
    </div>,
    document.getElementById("container")
);