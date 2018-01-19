import * as React from "react";

interface MyPropsMenu {
    // items: string[];
    options?: any; 
}

interface myState {
    items: string[];
}

export class MyMenu extends React.Component<MyPropsMenu, myState> {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Venta', 'Alquiler', 'Proyectos', 'Zona Interbank', 'Indice m2', 'Profesionales', 'Más']
        }
    }

    render() {        
        return(
            // <ul className="b-list u-flex">
            //     {this.props.items.map(function(name, index){
            //         return <li style={this.props.items} key={ index }>{name}</li>;
            //       })}
            // </ul>
            <MyOptionsMenu options = {this.state.items} />
        )
    }
}

class MyOptionsMenu extends React.Component<MyPropsMenu, myState> {
    constructor(props) {
        super(props)
    }

    render() {
        let options = this.props.options
        return(
            <div>
                <ul>
                    {options.map((option, index) => <li key={index}>{option}</li>)}
                </ul>
            </div>
        )
    }
}