import * as React from "react";
import styled, { css } from "styled-components";

interface MyProps {
    images?:any;
    newPostiion?:any;
}

interface MyState {
    position?: any;
    withContainer?: any;
}

const Wrapper = styled.section`
    display: flex;
    position: relative;
    width: 200px;
    background-color: antiquewhite;
    margin-right: 20px;
    border: 2px solid rgb(0, 67, 255);
`

// const Arrow = styled.a`
//     position: absolute;
//     background: rgba(101, 101, 101, 0.35);
//     top: 0;
//     bottom: 0;
//     ${(props: Arrow) => props.left && css `
//         left: 0;
//         z-index: 2;
//     `}
// `

// const ListSlider = styled.ul`
//     transition: .5s easy all;
//     width: ${this.widthUl};
//     transform: translatex(${this.state.withContainer}px);

// `

export class Slider extends React.Component<MyProps, MyState> {
    totalItems:any;
    widthUl:any;
    totalSLider = this.props.images.length -1;
    constructor(props){
        super(props);
        this.state = {
            position: 0,
            withContainer: 0,
        }
        this.calculateWidthContainer();
    }

    calculateWidthContainer(){
        let container = document.getElementsByClassName('b-slider');
        this.totalItems = this.props.images.length * 200;
        return this.widthUl = this.totalItems
    }

    onPrev(evt){
        evt.preventDefault();
        let target = evt.target;
        let withSlider = target.nextSibling.offsetWidth;
        if ( this.state.position <= 0 ) {
            this.setState({
                position: this.totalSLider,
                withContainer: 0
            })
        } else {
            this.setState(function(prevState) {
                return {
                    position: prevState.position - 1,
                    withContainer: prevState.withContainer + withSlider
                }
            });
        }

    }

    onNext(evt){
        evt.preventDefault();
        let target = evt.target;
        let siblings = target.previousSibling;
        let withSlider = siblings.offsetWidth;

        if ( this.state.position === this.totalSLider ) {
            this.setState({
                position: 0,
                withContainer: 0
            });
        } else {
            this.setState(function(prevState) {
                return {
                    position: prevState.position + 1,
                    withContainer: prevState.withContainer - withSlider                   
                }
            });           
        }

    }

    render(){
        let newState = this.state;
        return(
            <Wrapper >
                <a href="" className="arrow arrow-left" onClick={this.onPrev.bind(this)}>Prev</a>
                <div className="b-slider">
                    <ul className="u-flex" style={{width: this.widthUl, transform: `translatex(${this.state.withContainer}px)`, transition: ".5s ease all"}}>
                        {this.props.images.map(function(elem, index){
                            {if(newState.position === index){
                                return (
                                    <li key={index}>
                                        <img src={elem} alt="" className="u-block"/>
                                    </li>
                                )
                            }}
                            return (
                                <li key={index}>
                                    <img src={elem} alt=""  />
                                </li>
                            )        
                        })}
                    </ul>
                </div>
                <a href="" className="arrow arrow-right" onClick={this.onNext.bind(this)}>Next</a>
            </Wrapper>
        )
    }
}