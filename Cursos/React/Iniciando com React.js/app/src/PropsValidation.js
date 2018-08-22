import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsValidation extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.age}</h1>
                <h1>{this.props.height}</h1>
            </div>
        );
    }

}

PropsValidation.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number,
    func: PropTypes.func,
    obj: PropTypes.object,
    arr: PropTypes.array
};

PropsValidation.defaultProps = {
    name: 'Silva',
    age: 21,
    height: 1.80
};

export default PropsValidation