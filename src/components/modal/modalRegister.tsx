import * as React from "react";
import { Modal } from "../modal/modal";
import { ModalLogin } from "../modal/modalLogin";

interface State {
    IsVisibility? : any;
    modal?: any;
}


export class ModalRegister extends React.Component<any, State> {
    private ShowModal?:any = "";

    constructor(props) {
        super(props);
        this.state = {
            IsVisibility: 'u-none'
        }
    }

    openModal(evt) {
        evt.preventDefault();
        let target = evt.target;
        console.log('openModal');
        this.closeAllModal();
        this.setState({IsVisibility: 'u-flex'})
    }
    
    closeAllModal(){
        console.log('===<', document.getElementsByClassName('overlay'));
        var modals = document.getElementsByClassName('overlay');
        // {modals.map(function(element:any, index) {
        //     console.log('element', element);
        // })}

    }

    onCLickClose(evt){
        console.log('cerrar modales');
        evt.preventDefault();
        this.setState({
            IsVisibility: 'u-none'
        });
    }

    render() {
        return(
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus quod explicabo nam nisi delectus tempora, numquam ratione illo dolores voluptas exercitationem alias quidem eaque architecto enim dignissimos voluptatum! Ipsa?
                </p>
                <a href="" onClick={this.openModal.bind(this)}>Open Modal</a>
                <Modal showModal={this.state.IsVisibility}>
                <a href="" className="close" onClick={this.onCLickClose.bind(this)}>X</a>
                    <ModalLogin />
                </Modal>
            </div>
        )
    }
}