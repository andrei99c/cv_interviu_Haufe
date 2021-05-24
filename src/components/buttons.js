import React, { Component } from "react";
import './buttons.css'

class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state => ({ 
            isToggleOn: !state.isToggleOn
        }));
    }
    render(){
        return(
            <div className="buttons">
                <button onClick={this.handleClick}>
                    <h1 className="aliniatbuton">{this.state.isToggleOn ? "it s not much but it s honest work!" : "PUSH ME"}</h1>
                    <br />
    
                </button>
                

            </div>
        )
    }
}
export default Button;
