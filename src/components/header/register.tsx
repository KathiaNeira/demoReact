import * as React from "react";
import { Modal } from "../modal/modal"

// interface MyModal {
//     openModal?: any;
// }
interface State {
    IsVisibility? : any;
    modal?: any;
}

export class Register extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.state = {IsVisibility: 'u-none'}
    }

    onClick(evt) {
        evt.preventDefault();
        this.setState({IsVisibility: 'u-block'})
    }

    render() {
        return(
            <div>
                <div>
                    <a href="" onClick={this.onClick.bind(this)}> Regístrate </a>
                    <Modal openModal={this.state.IsVisibility} >
                        <p>MI contenido</p>
                    </Modal>
                    o 
                    <a href=""> Ingresa</a>
                </div>
                <button className="b-btn-register">Publica tu inmueble</button>
            </div>
        )
    }
}