import React from 'react';

export default class LogForm extends React.Component {
    render() {
        return (
            <div id='LogInForm'>
                <h3>Login In</h3>
                <hr></hr>
                <form>
                    <div>
                        <label for="userName">User Name: <input name="userName" />
                        </label>
                    </div>
                    <div>
                        <label for="password">Password:  <input name="password" />
                        </label>
                    </div>
                    <div>
                        <button>Sign In!</button>
                    </div>
                </form>
            </div>
        )
    }
}