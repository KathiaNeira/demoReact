import * as React from "react";

const button = {
    backgroundColor: 'tomato',
    border: 'none',
    padding: '6px 12px',
    marginRight: '10px'
};

export class Lifecycle extends React.Component<any, any> {
    constructor(props) {
        console.log('leyendo los props', props);
        super(props);
        this.state = {
            count: 0,
            message: "El estado inicial es 0",
        }
    }
    
    addNumber() {
        this.setState({count: this.state.count +1})
    }


    componentDidMount() {
        console.log('componentDidMount');
        setInterval(function () {
          this.setState({
            count: this.state.count + 1
          });
        }.bind(this), 1000);
    };

    render() {
        console.log('este es el render');
        if ( this.state.count > 0) {
            return(
                <div>
                    <p>Cambiando estado por segundo: {this.state.count}</p>
                    <button style={button} onClick={this.addNumber.bind(this)}>Adelantar contador</button>
                </div>
            )
            
        } else {
            return(
                <div>
                    <p>{this.state.message}</p>
                </div>
            )
        }
    }
}