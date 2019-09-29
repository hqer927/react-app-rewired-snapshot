import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Index = () => (
    <section>
        <Helmet>
            <meta charSet='utf-8' />
            <title>首页</title>
            <meta name='keywords' content={'首页'} />
        </Helmet>
        <h1>This is the index page!</h1>
        <p>If you have JS enabled, the links below should work instantaneously. If not, or if you JS is taking a long time to load, your site still works and is valid. Yay!</p>
        <nav>
            <Link to='/login'>Login here</Link>
            <Link to='/about'>About this site!</Link>
        </nav>
    </section>
);

export const Admin = () => (
    <section>
        <Helmet>
            <meta charSet='utf-8' />
            <title>Admin</title>
        </Helmet>
        <h1>You're logged in!</h1>
        <p>This page isn't snapshotted. If you refresh this page with javascript off you won't see anything.</p>
        <nav>
            <Link to='/'>Home</Link>
        </nav>
    </section>
);

export const Login = () => (
    <section>
        <Helmet>
            <meta charSet='utf-8' />
            <title>Login</title>
            <meta name='keywords' content={'Login'} />
        </Helmet>
        <h1>This is the login form</h1>
        <form action='/admin'>
            <p>This button isn't clicked during the snapshot process. Only links are crawled.</p>
            <button type='submit'>Go to Admin</button>
        </form>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About this site!</Link>
        </nav>
    </section>
);

/*export const About = () => (
    <section>
        <h1>About this site</h1>
        <p>This should all be snapshotted.</p>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log in here</Link>
            <a href='http://google.com'>External link, don't crawl this.</a>
        </nav>
    </section>
);*/

export const FourOhFour = () => (
    <section>
        <h1>Four Oh Four Yo.</h1>
    </section>
);
