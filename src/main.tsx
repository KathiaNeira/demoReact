import * as React from "react";
import { Header } from "./components/header";
import { Card } from "./components/welcome/cards";

interface State {
    cards: any[];
    title: string;
    content: string;
}

export class Main extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{
                title: "Surco",
                content: "Surco 234"
            }],
            title: "",
            content: ""
        };
    }

    onClick(e) {
        e.preventDefault();

        this.setState((prevState) => {
            let card = {
                title: this.state.title,
                content: this.state.content
            }
            return {
                title: '',
                content: '',
                cards: [...prevState.cards, card]
            }
        });
        console.log('============>', this.state)
    }

    onChangeTitle(evt) {
        let target = evt.target;
        console.log('target', target.value);
        this.setState(function(prevState) {
            return {
                title: target.value
            }
        });
        console.log('state title', this.state);
    }

    onChangeContent(evt) {
        let target = evt.target;
        console.log('target', target.value);
        this.setState(function(prevState) {
            return {
                content: target.value
            }
        });
        console.log('state content', this.state);
    }

    render() {
        return(
            <div>
                <Header />
                <div className="u-flex">
                    {/* <Card /> */}
                    {this.state.cards.map((element:any, index) => {
                        return(
                            <Card name={element.title} direction={element.content} key={index} />
                        )}
                    )}
                </div>
                <form>
                    <input value={this.state.title} placeholder="Ingrese nombre" type="text" onChange={this.onChangeTitle.bind(this)}/>
                    <input value={this.state.content} placeholder="Ingrese dirección" type="text" onChange={this.onChangeContent.bind(this)}/>
                    <button onClick={this.onClick.bind(this)}>Crear</button>
                </form>
            </div>
        )
    }
}