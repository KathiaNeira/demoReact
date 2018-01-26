import * as React from "react";
import * as ReactDom from "react-dom";

interface MyPropsNameCard {
    name?: any;
    description?: any;
    key?: any;
}

export class NameCard extends React.Component<MyPropsNameCard, {}> {
    render() {
        return (
            <div className="b-card u-flex">
                <ImageCard />
                <div className="u-left">
                    <h2>Título: <span>{this.props.name}</span></h2>
                    <h2>Descripción: <span>{this.props.description}</span></h2>                    
                </div>
            </div>
        )
    }
}

class ImageCard extends React.Component {
    render() {
        return <img className="u-block" src="https://vle.rochdalesfc.ac.uk/pluginfile.php/5354/mod_label/intro/Home-icon.png"/>
    }
}



export class Card extends React.Component<MyPropsNameCard, {}> {
    render(){
        return(
            <div>
                <NameCard name={this.props.name} description={this.props.description} key={this.props.key}/>
            </div>
        )
    }
}
