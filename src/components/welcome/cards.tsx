import * as React from "react";
import * as ReactDom from "react-dom";

interface MyPropsNameCard {
    name?: any;
    direction?: any;
    key?: any;
}

export class NameCard extends React.Component<MyPropsNameCard, {}> {
    render() {
        return (
            <div className="b-card u-flex">
                <ImageCard />
                <div>
                    <h2>{this.props.name}</h2>
                    <span>{this.props.direction}</span>
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
                <NameCard name={this.props.name} direction={this.props.direction} key={this.props.key}/>
            </div>
        )
    }
}
