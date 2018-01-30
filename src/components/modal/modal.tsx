import * as React from "react";
import * as ReactDOM from "react-dom";


const containerModal = document.getElementById('modal');
// const close = document.createElement('a');
// close.setAttribute('href', "");
// close.className= 'close';
// close.textContent = "X";

export class Modal extends React.Component {

    element:any = document.createElement('div');

    constructor(props) {
        super(props);
        this.element.className = "modalContainer u-flex";
        // this.element.appendChild(close)
    }

    componentDidMount() {
        console.log('componentDidMount');
        containerModal.appendChild(this.element);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        containerModal.removeChild(this.element);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.element,
        )
    }
}