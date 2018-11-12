import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }

    onEmailChange(e) {
        this.props.dispatch({
            type: 'EMAIL_CHANGE',
            email: e.target.value
        });
    }

    onPhoneChange(e) {
        this.props.dispatch({
            type: 'PHONE_CHANGE',
            phone: e.target.value
        });
    }

    render() {
        return (
            <form>
                <strong>Name:</strong>
                <br />
                <input className="form-control" type="text" name="name" />
                <br /><br />
                <strong>Email address:</strong>
                <br />
                <input className="form-control" type="text" name="email" onChange={this.onEmailChange} />
                <br /><br />
                <strong>Phone number:</strong>
                <br />
                <input className="form-control" type="text" name="phone" onChange={this.onPhoneChange} />
                <hr />
                <input type="submit" value="Submit" />
            </form>);
    }
}

const mapStateToProps = function(state) {
    return {
        email: state.form.email,
        phone: state.form.phone,
    };
}

export default connect(mapStateToProps)(Form);
