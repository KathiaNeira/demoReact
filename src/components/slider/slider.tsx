import * as React from "react";

interface MyProps {
    images?:any;
    newPostiion?:any;
}

interface MyState {
    position?: any;
    active: string;
}

export class Slider extends React.Component<MyProps, MyState> {
    constructor(props){
        super(props);
        this.state = {
            position: 0,
            active: 'u-block'
        }
    }

    onPrev(evt){
        evt.preventDefault();
        var totalSLider = this.props.images.length
        if ( this.state.position <= 0 ) {
            this.setState({position: totalSLider})
        };

        this.setState(function(prevState) {
            return {
                position: prevState.position - 1
            }
        })
    }

    onNext(evt){
        evt.preventDefault();
        var totalSLider = this.props.images.length;
        if ( this.state.position >= totalSLider ) {
            this.setState({position: 0})
        };

        this.setState(function(prevState) {
            return {
                position: prevState.position + 1
            }
        })
    }

    render(){
        let newState = this.state;
        return(
            <div className="u-flex b-content-slider">
                <a href="" className="arrow arrow-left" onClick={this.onPrev.bind(this)}>Prev</a>
                <ul className="u-flex b-slider" >
                    {this.props.images.map(function(elem, index){
                        {if(newState.position === index){
                            return (
                                <li key={index}>
                                    <img src={elem} alt="" className="u-block show-loader"/>
                                    </li>
                            )
                        }}
                        return (
                            <li key={index}>
                                <img data-src={elem} alt="" className="u-none" />
                            </li>
                        )        
                    })}
                </ul>
                <a href="" className="arrow arrow-right" onClick={this.onNext.bind(this)}>Next</a>
            </div>
        )
    }
}