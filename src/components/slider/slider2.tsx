import * as React from "react";
import { Slider } from "../slider/slider";

interface MyState{
    images: any[];
}

// declarando todas las imagenes a mostrar en los slider's

const img = [
    'http://www.eljurista.net/uploadsfotos/pequena-casa-con-jardin_417887.jpg',
    'http://www.arqhys.com/casas/fotos/casas/Desafios-Generales-en-Dise%C3%B1o-de-una-Casa.jpg',
    'https://www.anglaisfacile.com/cgi2/myexam/images/15033.gif',
    'https://i.pinimg.com/originals/9f/f4/bd/9ff4bdf6965ae25b07c98e1e6d59b662.jpg',
    'https://i.pinimg.com/originals/46/1a/b2/461ab22b3121f300052f6c24ffb5d0af.jpg',
    'https://www.ciudadceleste.com/wp-content/uploads/2015/05/fiore-ciudad-celeste-360x322.jpg',
    'https://i.pinimg.com/originals/23/48/fb/2348fbc29598f1cbe32a398fe5ef6f55.jpg',
    'https://images.homify.com/c_fill,f_auto,q_auto:eco,w_440/v1471347312/p/photo/image/1622221/010.jpg'
];

export class Slider2 extends React.Component<{}, MyState> {
    constructor(props){
        super(props);
        this.state = {
            images : img
        }
    }

    render(){
        return(
            <div className="u-flex item-slider">
                <Slider images={this.state.images} />
                <div className="content-slider">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Cum natus amet vitae! Incidunt autem eaque rem reprehenderit atque et voluptatum.</p>
                    <p>Modi, mollitia inventore aut nemo doloremque voluptatem aliquid quis reiciendis</p>
                </div>      
            </div>
        )
    }
}