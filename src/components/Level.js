import React, { useState } from "react";
import Item from "./Item";
import printer from "../images/printer.jpg";
import centrifuge from "../images/centrifuge.jpg";
import fbs from "../images/fbs.jpg";

class Level extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            state: 0
        };
    }

    handleClick(name) {
       if (name !== this.props.array[this.state.state]) {
           alert('Wrong selection');
           this.setState({state:0});
           return;
        }

        else {
            this.setState({state: this.state.state+1});
        }

        //Check if win
        if (this.state.state+1 === this.props.array.length){
            alert("You win!!");
            this.setState({state:0});
        }
    }

    renderItem(name, image, x, y){
        return (
            <Item 
                name={name}
                image={image}
                onClick={() => this.handleClick(name)}
                x={x}
                y={y}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderItem("printer", printer, 0, "left")}
                {this.renderItem("centrifuge", centrifuge, 100, "left")}
                {this.renderItem("fbs", fbs, 200, "left")}
            </div>
        );
    }
}

export default Level;
