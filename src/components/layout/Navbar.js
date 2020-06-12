import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
	const {auth,profile} = props;
	const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
	return (
		<nav>
			<div  className="nav-wrapper">
				<div className="container">
					<Link to='/' className= "brand-logo black-text">blogs.org   <i class="material-icons right large">local_florist</i></Link>
					{auth.isLoaded && links}
				</div>
			</div>
		</nav>
	)
}

const mapStatetoProps = (state) => {
	console.log(state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStatetoProps)(Navbar);