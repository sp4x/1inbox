import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }


    componentWillMount() {
        this.props.datadir.readAsync(this.props.file, (err, data) => {
            if (this._mounted) {
                this.setState({ content: data });
            }
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