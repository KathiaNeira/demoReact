import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/header/index";
import { NameUser } from "./components/welcome/welcome";
import { Lifecycle } from "./components/Lifecycle/lifecycle";

ReactDOM.render(
    <div>
        <Header />
        <NameUser />
        <Lifecycle />
    </div>,
    document.getElementById("container")
);
