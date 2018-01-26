import * as React from "react";
import { Modal } from "../modal/modal";
import { ModalLogin } from "../modal/modalLogin";

interface State {
    IsVisibility? : any;
    dataId?: any;
    modal?: any;
}


export class Login extends React.Component<any, State> {
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
                    <button onClick={this.onClick.bind(this)}> Ingresa </button>
                    <Modal showModal={this.state.IsVisibility}>
                        <a href="" className="close" onClick={this.onCLickClose.bind(this)}>X</a>
                        <ModalLogin />
                    </Modal>
                </div>
            </div>
        )
    }
}