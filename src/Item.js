import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.loadContent = true;
        this.state = {
            content: ""
        }
    }


    componentWillMount() {
        this.props.datadir.readAsync(this.props.file, (err, data) => {
            if (this.loadContent) {
                this.setState({ content: data });
            }
        });
    }

    componentWillUnmount() {
        this.loadContent = false;
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