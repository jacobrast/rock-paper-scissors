import React, { useState } from "react";
import { Link } from "react-router-dom";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: props.x,
            y: props.y,
            image: props.image,
            name: props.name,
        }
    }

    render() {
        return (
        	<img src={this.state.image} className="item" height="100px" width="100px" onClick={() => this.props.onClick()} />	
        );
    }
}

export default Item;
