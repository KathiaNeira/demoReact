import * as React from "react";
import { Header } from "./components/header";
import { Card } from "./components/welcome/cards";
import { Mapa } from "./components/mapa/mapa"

interface State {
    cards: any[];
    title: string;
    description: string;
}

export class Main extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{
                title: "Surco",
                description: "Surco 234"
            }],
            title: "",
            description: ""
        };
    }

    onClick(e) {
        e.preventDefault();

        this.setState((prevState) => {
            let card = {
                title: this.state.title,
                description: this.state.description
            }
            return {
                title: '',
                description: '',
                cards: [...prevState.cards, card]
            }
        });
    }

    onChangeTitle(evt) {
        let target = evt.target;
        console.log('target', target.value);
        this.setState(function(prevState) {
            return {
                title: target.value
            }
        });
    }

    onChangedescription(evt) {
        let target = evt.target;
        console.log('target', target.value);
        this.setState(function(prevState) {
            return {
                description: target.value
            }
        });
        console.log('state description', this.state);
    }

    render() {
        return(
            <div>
                <Header />
                {/* <div className="u-flex"> */}
                    {/* <Card /> */}
                    {/* {this.state.cards.map((element:any, index) => {
                        return(
                            <Card name={element.title} description={element.description} key={index} />
                        )}
                    )}
                </div>
                <form>
                    <input value={this.state.title} placeholder="Ingrese nombre" type="text" onChange={this.onChangeTitle.bind(this)}/>
                    <input value={this.state.description} placeholder="Ingrese dirección" type="text" onChange={this.onChangedescription.bind(this)}/>
                    <button onClick={this.onClick.bind(this)}>Crear</button>
                </form> */}
                <Mapa />
            </div>
        )
    }
}