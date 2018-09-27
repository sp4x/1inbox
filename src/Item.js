

import React, { Component } from 'react';
import jetpack from 'fs-jetpack'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }


    componentWillMount() {
        const datadir = jetpack.cwd("/home/vincenzo/dev/1inbox/data/");
        datadir.readAsync(this.props.path).then((data) => {
            this.setState({content: data});
        });
    }

   

    render() {
        return (
            <div className="item">
                <div className="item-content">{this.state.content}</div>
            </div>
        );
    }
}

export default Item;