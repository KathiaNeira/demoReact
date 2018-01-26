import * as React from "react";

interface MyPropsModal {
    showModal?: any;
}

export class Modal extends React.Component<MyPropsModal, {}> {
    render() {
        return (
            <div className={`overlay ${this.props.showModal}`}>
                <div className="modal">
                    {this.props.children}
                </div>
            </div>
        )
    }
}