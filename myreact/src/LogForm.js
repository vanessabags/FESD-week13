import { useState } from 'react';
import NewPost from './NewPost';
import Content from './Content';


export default function Form() {
    const [username, setTo] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [isLogged, LoggedIn] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`
                Welcome back, ${username}!

                You have logged back in!`);
        }, 2000);
        setTo("");
        setPassword("");
        LoggedIn(true);
    }

    return (
        <div>
            {isLogged ? (
                <div className='content'>
                    <NewPost />
                    <br />
                    <br />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <br />
                    <button onClick={() =>LoggedIn(false)}>
                        Log Out?
                    </button>
                </div>
            ) : (
                <div id='LogInForm'>
                <h3>Log In!</h3>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            User Name: 
                             <input 
                                name="userName"
                                value= {username}
                                onChange={e => setTo(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:  
                             <input 
                                name="password"
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Sign In!</button>
                    </div>
                </form>
            </div>
            )}
        </div>
    );
}