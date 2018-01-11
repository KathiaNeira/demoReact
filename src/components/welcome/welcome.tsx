import * as React from "react";
import * as ReactDom from "react-dom";

interface MyProps {
    name?: string;
}

class Welcome extends React.Component<any, {}> {
    render() {
        return (
            <div>
                <h1>Hola, {this.props.name}</h1>
                <h2>Aprendiendo {this.props.curse}</h2>
            </div>
        )
    }
}


export class NameUser extends React.Component<{}, {}> {
    render(){
        return(
            <div>
                <Welcome name="Kathia" curse="React"/>
            </div>
        )
    }
}
