import * as React from "react";
import { Modal } from "../modal/modal";
import { ModalRegister } from "../modal/modalRegister";
import { ModalLogin } from "../modal/modalLogin";

interface State {
    IsVisibility? : any;
    dataId?: any;
    modal?: any;
}


export class Register extends React.Component<any, State> {
    private ShowModal?:any = "";
    constructor(props) {
        super(props);
        this.state = {
            IsVisibility: 'u-none'
        }
    }
    
    onClick(evt) {
        evt.preventDefault();
        this.setState({IsVisibility: 'u-flex'})
    }


    onCLickClose(evt){
        evt.preventDefault();
        this.setState({
            IsVisibility: 'u-none'
        });
    }

    render() {
        return(
            <div>
                <div>
                    <a href="" onClick={this.onClick.bind(this)}> Regístrate </a>
                    <Modal showModal={this.state.IsVisibility}>
                        <a href="" className="close" onClick={this.onCLickClose.bind(this)}>X</a>
                        <ModalRegister />
                    </Modal>
                    o  
                </div>
            </div>
        )
    }
}