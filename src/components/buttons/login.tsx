import * as React from "react";
import { Modal } from "../modal/modal";
import { ModalLogin } from "../modal/modalLogin";

interface State {
    IsVisibility? : any;
}

export class Login extends React.Component<any, State> {
    private ShowModal?:any = "";
    constructor(props) {
        super(props);
        this.state = {
            IsVisibility: false
        }
    }
    
    onClick(evt) {
        evt.preventDefault();
        this.setState({IsVisibility: true})
    }


    onCLickClose(evt){
        evt.preventDefault();
        this.setState({
            IsVisibility: false
        });
    }

    render() {
        const modal = this.state.IsVisibility ? (
            <Modal>
                <div className="modal">
                    <div className="ModalHead">
                        <a href="" className="close" onClick={this.onCLickClose.bind(this)}>X</a>
                    </div>
                    <ModalLogin/>

                </div>
            </Modal>
        ) : null;

        return(
            <React.Fragment>
                <button onClick={this.onClick.bind(this)}> Abrir Modal 2</button>
                {modal}
            </React.Fragment>
        )
    }
}