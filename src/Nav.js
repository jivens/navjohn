import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Nav.css';
import SpellingPronunciation from './SpellingPronunciation';
import About from './About';

class Nav extends Component {

	burgerToggle = ( ) => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	};

  	render() {
    	return (
    		<Router>
    		<div>
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<Link to="/"><i className="fa faCoffee site-nav--icon"></i>About</Link>
						<Link to="/spelling"><i className="fa faCoffee site-nav--icon"></i>Spelling</Link>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<Link to="/" onClick={this.burgerToggle}> about</Link>
						<Link to="/spelling" onClick={this.burgerToggle}> spelling</Link>
					</div>
				</div>
			</nav>
				<Switch>
                  <Route exact path="/" component={About} />
                  <Route path="/spelling" component={SpellingPronunciation} />
                </Switch>
			</div>
			</Router>
    	);
  	}
}


export default Nav;