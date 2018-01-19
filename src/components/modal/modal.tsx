import * as React from "react";

interface MyPropsModal {
    IsVisibility?: any;
    openModal?: any;
}

export class Modal extends React.Component<MyPropsModal, {}> {
    onclick(e){
        e.preventDefault();
        this.setState({openModal: false})
    }

    render() {
        return (
            <div className={this.props.openModal}>
                <a href="" onClick={this.onclick.bind(this)}>close</a>
                {this.props.children}
            </div>
        )
    }
}