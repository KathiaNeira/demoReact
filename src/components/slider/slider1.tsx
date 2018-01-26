import * as React from "react";
import { Slider } from "../slider/slider";

interface MyState{
    images: any[];
}

// declarando todas las imagenes a mostrar en los slider's

const img = [
    'http://www.eljurista.net/uploadsfotos/pequena-casa-con-jardin_417887.jpg',
    'http://www.arqhys.com/casas/fotos/casas/Desafios-Generales-en-Dise%C3%B1o-de-una-Casa.jpg'
    ];


export class Slider1 extends React.Component<{}, MyState> {
    constructor(props){
        super(props);
        this.state = {
            images : img
        }
    }

    render(){
        return(
            <div className="u-flex">
                <Slider images={this.state.images} />             
            </div>
        )
    }
}