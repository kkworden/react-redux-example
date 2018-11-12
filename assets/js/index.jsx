import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form.jsx';
import ValidationMessages from './validation-messages.jsx';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const initialState = {
    form: {
        email: '',
        phone: '',
    }
};

const formReducers = function (state, action) {
    console.log(action);
    if (action.type == 'EMAIL_CHANGE') {
        return Object.assign({}, state, {
            email: action.email
        });
    } else if (action.type == 'PHONE_CHANGE') {
        return Object.assign({}, state, {
            phone: action.phone
        });
    }
    return Object.assign({}, state);
};

const store = createStore(
    combineReducers({
        form: formReducers
    }), initialState);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Form />
                <ValidationMessages />
            </div>);
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-app'));
