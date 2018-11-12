import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const errorStyle = function(show) {
    return {
        color: 'red',
        display: show ? 'inline' : 'none'
    };
};

const successStyle = function(show) {
    return {
        color: 'green',
        display: show ? 'inline' : 'none'
    };
};

class ValidationMessages extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let emailValid = /(.*)@(.*)\.(.*)/.test(this.props.email);
        let phoneValid = /(\d{10})/.test(this.props.phone);

        return (
            <div>
                <span style={ errorStyle(!emailValid) }>Email address is not valid<br /></span>
                <span style={ errorStyle(!phoneValid) }>Phone number is not valid<br /></span>
                <span style={ successStyle(emailValid && phoneValid) }>Valid form!</span>
            </div>);
    }
}

const mapStateToProps = function(state) {
    return {
        email: state.form.email,
        phone: state.form.phone,
    };
}

export default connect(mapStateToProps)(ValidationMessages);
