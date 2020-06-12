import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
	return (
		<ul className="right">
			<li><NavLink to='/add' className="black-text">NewBlog<i class="material-icons right large">create</i></NavLink></li>
			<li> <a onClick={props.signOut} className="black-text">Log Out</a> </li>
			<li>
				<div class="chip black large">
    				<a className="white-text">{props.profile.firstName} {props.profile.lastName}</a>
 				 </div>
			</li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut()) 
	}
}

export default connect(null,mapDispatchToProps)(SignedInLinks);