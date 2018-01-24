import * as React from "react";

interface MyPropsModal {
    IsVisibility?: any;
    showModal?: any;
    DataId?: any;
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