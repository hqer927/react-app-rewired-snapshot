import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { inject, observer } from 'mobx-react';

@inject('Store')
@observer
class About extends Component {
    displayName = 'About';
    /*componentDidMount () {
        fetch('http://172.18.34.240:8415/mock/dataApi/seo/api').then((res) => res.json()).then((data) => {
            this.setState({keywords:data['voice'].keywords});
        });
    }*/
    componentWillMount() {
        this.props.Store.set({title:'关于',keyWords:'sadad'});
    }
    render () {
        return (
            <div className='About'>
                <Helmet>
                    <title>{this.props.Store.title}</title>
                    <meta name='keywords' content={this.props.Store.keyWords} />
                </Helmet>
                <h1>About this site</h1>
                <p>This should all be snapshotted.</p>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Log in here</Link>
                    <a href='http://google.com'>External link, don't crawl this.</a>
                </nav>
            </div>
        );
    }
}

export default About;
