import React, { Component } from 'react'
import Notifications from './Notifications.js'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose}  from 'redux'
import { Redirect } from 'react-router-dom'
import {NavLink} from 'react-router-dom'




class Dashboard extends Component {
	render(){
		const {projects, auth, notifications} = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		return(
			<div>
				<div className="theme">
					<div className="branding">
						<h1 className="black-text center aa">DEAD BLOGGERS SOCIETY</h1>
						<h6 className="black-text center bb">“Blogs are whatever we make them. Defining ‘Blog’ is a fool’s errand.” ~Michael Conniff</h6>
					</div>
							
				</div>

				<div className="dashboard">
					<div className="row">
						<div className="col s12 m9">
							<ProjectList projects={projects} />
						</div>
						<div className="col s12 m2 offset-m1 notifs">
							<Notifications notifications={notifications} />
							<div class="container">
								<NavLink to='/add'><a class="waves-effect waves-light btn-large pulse createnew black"><i class="material-icons right">create</i>CREATE BLOG</a></NavLink>
							</div>
						</div>
					</div>
				</div>
				<footer class="page-footer">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text">Blogs.org</h5>
								<p class="grey-text text-lighten-4">Showcase your work with talented artists across the globe</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">Contact us</h5>
								<ul>
								<li><a class="grey-text text-lighten-3" href="#!">admin@thedeadbloggerssociety.co.in</a></li>
								<li><a class="grey-text text-lighten-3" href="#!">contact@thedeadbloggersociety.co.in</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="footer-copyright">
						<div class="container">
							© 2018 The Dead Bloggers Society
							<a class="grey-text text-lighten-4 right" href="#!">About</a>
						</div>
					</div>
				</footer>
	
			</div>
			
				
			
		)
	}
}



const mapStateToProps = (state) => {
	console.log(state)
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'projects', orderBy: ['createdAt','desc']},
		{collection: 'notifications' , limit: 5, orderBy: ['time','desc']}
	])
)(Dashboard)

// <div className="input-field">
// 							<button className="waves-effect waves-light btn-large goback">
// 								<NavLink to="/add" className="goback"><h6 className="aaaa">ADD A NEW RECORD</h6></NavLink>
// 							</button>
// 						</div>