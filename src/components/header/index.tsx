import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { Mapa } from "../mapa/mapa";
import { Register } from "../buttons/register";
import { Login } from "../buttons/login";
import { MyLogo } from "./logo"
import { AddCards } from "../cards/addCards";
import { Slider1 } from "../slider/slider1";
import { Slider2 } from "../slider/slider2";

interface MyPropsMenu {
    options?: any; 
}

interface myState {
    items: string[];
}

import { Modal } from "../modal/modal";

export class Header extends React.Component<any, {}> {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <Router>
                <div>
                    <div className="u-flex b-menu">
                        <MyLogo />
                        <ul className="u-flex">
                            <li key="0"><Link to="/cards">Cards</Link></li>
                            <li key="1"><Link to="/modal">Modal</Link></li>
                            <li key="2"><Link to="/mapa?pathParam?">Mapa</Link></li>
                            <li key="3"><Link to="/slider1">slider1</Link></li>
                        </ul>

                    </div>

                    <Route path="/cards" component={cards}/>
                    <Route path="/modal" component={modal}/>
                    <Route path="/mapa" component={mapa}/>
                    <Route path="/slider1" component={slider1}/>
                </div>
            </Router>
        )
    }
}

const modal =()=> (
    <div className="u-flex">
        <Register />
        <Login />
    </div>
)

const mapa =()=> (
    <Mapa />
)

const cards =()=> (
    <AddCards />
)

const slider1=()=> (
    <div>
        <Slider1 />
        <Slider2 />
    </div>
)