import * as React from "react";

export class MyMenu extends React.Component<any, {}> {
    render() {

        var items = ['Venta', 'Alquiler', 'Proyectos', 'Zona Interbank', 'Indice m2', 'Profesionales', 'Más'];
        
        return(
            <ul className="b-list u-flex">
                {items.map(function(name, index){
                    return <li style={items} key={ index }>{name}</li>;
                  })}
            </ul>
        )
    }
}